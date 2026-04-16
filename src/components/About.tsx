
import { motion } from 'framer-motion';
import { Database, Layout, Shield, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="text-primary-500" />,
      title: "Backend Excellence",
      description: "Specializing in microservices and scalable REST APIs using Node.js and Express."
    },
    {
      icon: <Zap className="text-primary-500" />,
      title: "Cloud Native",
      description: "Proficient in AWS (EC2, S3, Lambda) and modern CI/CD automation."
    },
    {
      icon: <Layout className="text-primary-500" />,
      title: "Full Stack Depth",
      description: "Building seamless user experiences with React.js and TypeScript."
    },
    {
      icon: <Shield className="text-primary-500" />,
      title: "Quality Focused",
      description: "Committed to clean code, performance optimization, and robust security."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with over 3 years of experience in architecting and delivering high-performance web applications. My journey is driven by a deep curiosity for how complex systems work and a commitment to building solutions that scale.
              </p>
              <p>
                My core strength lies in <strong>Backend Development</strong>, specifically within the Node.js ecosystem. I have a proven track record of designing robust REST APIs, implementing microservices architectures, and managing cloud infrastructure on <strong>AWS</strong>.
              </p>
              <p>
                I approach every project with a <strong>scalability mindset</strong> and a focus on problem-solving. Whether it's optimizing database queries to improve performance or automating workflows to increase efficiency, I strive to deliver production-grade results that exceed expectations.
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-semibold mb-2">My Mission</h4>
              <p className="text-sm italic">"To build resilient digital infrastructure that empowers businesses to grow without technical friction."</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 border-transparent hover:border-primary-500/20 hover:shadow-primary-500/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
