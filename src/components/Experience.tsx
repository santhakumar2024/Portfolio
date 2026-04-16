
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2025 – Present",
      bullets: [
        "Architecting and delivering high-performance full-stack applications for diverse clients.",
        "Specializing in scalable backend architectures using Node.js, Express, and AWS.",
        "Developing responsive frontend user experiences with React.js and modern state management."
      ]
    },
    {
      role: "Software Engineer",
      company: "AVASOFT / ZEB",
      period: "2024 – 2025",
      bullets: [
        "Architected and built scalable REST APIs handling thousands of concurrent requests daily.",
        "Optimized backend logic and database indexing, successfully reducing API response times to <200ms.",
        "Implemented microservices architecture to improve system modularity and deployment efficiency.",
        "Integrated secure multi-channel payment systems (Stripe, Google Play) achieving critical business milestones."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2023 – 2024",
      bullets: [
        "Developed a comprehensive employee management system for small-to-medium enterprises.",
        "Managed the full software development lifecycle from initial UI/UX design to final AWS deployment.",
        "Delivered production-ready features for real estate platforms, integrating CMS and cloud storage solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A track record of delivering high-impact solutions and driving technical excellence in fast-paced environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-200 dark:border-slate-800"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 shadow-sm" />
              
              <div className="glass-card p-8 group hover:border-primary-500/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm mb-1 uppercase tracking-wider">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                      <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
