import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-emerald-600 bg-clip-text text-transparent mb-2">
              SanthakumarJS
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Building Scalable Backend Systems & High-Performance Web Applications
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="https://github.com/santhakumar2024" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/santha-kumar-0b1ab7278" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:santhakumarjs1210@gmail.com" className="hover:text-primary-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {currentYear} Santhakumar J S. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
