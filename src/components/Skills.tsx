
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Backend",
      icon: <Server className="text-primary-500" />,
      skills: ["Node.js", "Express.js", "REST APIs", "Microservices"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary-500" />,
      skills: ["AWS (EC2, S3)", "CI/CD", "Docker", "Nginx"]
    },
    {
      title: "Database",
      icon: <Database className="text-primary-500" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      title: "Frontend",
      icon: <Layout className="text-primary-500" />,
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-primary-500" />,
      skills: ["Git", "Postman", "Agile/Scrum", "Vite"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack, focused on building robust and scalable applications.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass-card p-6 flex flex-col items-center text-center hover:border-primary-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-color-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
