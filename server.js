require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Serve static site (index.html, css/, js/, assets/)
app.use(express.static(path.join(__dirname)));

// Create transporter from env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// optional verify at startup
transporter.verify().then(() => {
  console.log('SMTP transporter verified');
}).catch((err) => {
  console.warn('SMTP verification failed:', err.message || err);
});

// Function to update SMTP_FROM in .env file
function updateSMTPFromInEnvFile(userEmail) {
  try {
    const envPath = path.join(__dirname, '.env');
    
    if (!fs.existsSync(envPath)) {
      console.warn('.env file not found, creating new one');
      fs.writeFileSync(envPath, '');
    }
    
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    // Sanitize the email
    const sanitizedEmail = userEmail.trim();
    
    // Update ONLY the SMTP_FROM line
    if (envContent.includes('SMTP_FROM=')) {
      // Replace existing SMTP_FROM value
      envContent = envContent.replace(
        /SMTP_FROM=.*/g,
        `SMTP_FROM=${sanitizedEmail}`
      );
      console.log(`✅ Updated SMTP_FROM to: ${sanitizedEmail}`);
    } else {
      // Add SMTP_FROM if it doesn't exist
      envContent += `SMTP_FROM=${sanitizedEmail}\n`;
      console.log(`✅ Added SMTP_FROM: ${sanitizedEmail}`);
    }
    
    // Write back to .env file
    fs.writeFileSync(envPath, envContent);
    
    // Update current process environment for this session
    process.env.SMTP_FROM = sanitizedEmail;
    
    return true;
  } catch (error) {
    console.error('Error updating .env file:', error);
    return false;
  }
}

app.get('/_health', (_req, res) => res.send('ok'));

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Basic header-injection protection
  const injection = /[\r\n<>]/;
  if (injection.test(email) || injection.test(subject) || injection.test(name)) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  // Update SMTP_FROM in .env file with the user's email
  const envUpdated = updateSMTPFromInEnvFile(email);
  if (!envUpdated) {
    console.warn('Failed to update .env file, but continuing with email send');
  }

  const authenticatedFrom = process.env.SMTP_FROM || process.env.SMTP_USER;
  const visitorFrom = `${name} <${email}>`;

  const mailOptions = {
    from: visitorFrom,                 // primary: visitor address (may be rewritten)
    to: process.env.MY_EMAIL,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent from visitor address:', email);
    return res.json({ 
      ok: true, 
      envUpdated: envUpdated,
      message: 'Email sent successfully and SMTP_FROM updated' 
    });
  } catch (err) {
    console.error('Failed to send using visitor From:', err);

    // Fallback to authenticated sender to ensure deliverability
    try {
      mailOptions.from = authenticatedFrom;
      await transporter.sendMail(mailOptions);
      console.log('Email sent using authenticated sender fallback');
      return res.json({ 
        ok: true, 
        fallback: true, 
        envUpdated: envUpdated,
        message: 'Email sent (fallback) and SMTP_FROM updated' 
      });
    } catch (err2) {
      console.error('Fallback send failed:', err2);
      return res.status(500).json({ 
        error: 'Failed to send email.',
        envUpdated: envUpdated 
      });
    }
  }
});

// New endpoint to only update SMTP_FROM (optional)
app.post('/update-smtp-from', (req, res) => {
  const { email } = req.body || {};
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const updated = updateSMTPFromInEnvFile(email);
  
  if (updated) {
    res.json({ 
      success: true, 
      message: `SMTP_FROM updated to: ${email}`,
      newSMTPFrom: email 
    });
  } else {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update SMTP_FROM' 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));