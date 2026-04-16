import { motion } from 'framer-motion';
import { ArrowRight, Download, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <Server size={16} />
            <span>Full Stack Developer | Backend Specialist</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Building <span className="text-primary-500">Scalable</span> Backend Systems & High-Perf Web Apps
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            Full Stack Developer with 3+ years of experience specializing in Node.js, React, and AWS. 
            I design and deliver production-grade, scalable solutions that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="https://drive.google.com/file/d/1MBW74meBhwy4OfKrYEvGXrFn72HWM7f3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-800">
            <img 
              src="images/profile.jpg" 
              alt="Santhakumar J S" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg">
              <span className="font-bold">AWS</span>
            </div>
            <div>
              <p className="text-xs text-slate-500">Cloud Expert</p>
              <p className="text-sm font-semibold">EC2 | S3 | Lambda</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-lg bg-[#339933] flex items-center justify-center text-white shadow-lg">
              <span className="font-bold">JS</span>
            </div>
            <div>
              <p className="text-xs text-slate-500">Backend Strength</p>
              <p className="text-sm font-semibold">Node.js | Express</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
