import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let’s build something <span className="text-primary-500">scalable</span> together.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
              Whether you have a question about backend architecture, want to discuss a new project, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:santhakumarjs1210@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-primary-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="font-semibold">santhakumarjs1210@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/santha-kumar-0b1ab7278" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-blue-500/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                    <p className="font-semibold">Connect</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/santhakumar2024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-slate-500/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">GitHub</p>
                    <p className="font-semibold">Follow</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold">Send a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Collaboration" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-full gap-2 py-4"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
