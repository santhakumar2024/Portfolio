import { motion } from 'framer-motion';
import { ExternalLink, Mail, ShoppingCart, Target } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const projects = [
    {
      title: "Email Automation System",
      icon: <Mail className="text-white" />,
      color: "bg-blue-500",
      description: "A high-throughput automated email workflow system designed for mass reach with precise tracking.",
      impact: "Sent 1000+ emails with status tracking and Google Drive integration.",
      features: [
        "CSV-based recipient processing",
        "Automated status tracking & logging",
        "Google Drive API integration",
        "AWS-hosted backend for stability"
      ],
      tech: ["Node.js", "Express", "AWS", "Google APIs"],
      github: "https://github.com/santhakumar2024",
      link: "#"
    },
    {
      title: "E-commerce Backend System",
      icon: <ShoppingCart className="text-white" />,
      color: "bg-emerald-500",
      description: "A secure and scalable RESTful API architecture for modern e-commerce platforms.",
      impact: "Optimized queries resulting in 30% performance improvement; handled authentication and orders.",
      features: [
        "JWT-based secure authentication",
        "Comprehensive order management",
        "Optimized MongoDB query patterns",
        "Scalable microservices structure"
      ],
      tech: ["Node.js", "MongoDB", "AWS", "Express"],
      github: "https://github.com/santhakumar2024",
      link: "#"
    },
    {
      title: "Lead Generation Tool",
      icon: <Target className="text-white" />,
      color: "bg-indigo-500",
      description: "An automated lead processing system that streamlines data extraction and workflow automation.",
      impact: "Automated manual data entry workflows, reducing processing time by 60%.",
      features: [
        "Automated data extraction pipeline",
        "Custom workflow orchestration",
        "Lead scoring and categorization",
        "Seamless CRM integration"
      ],
      tech: ["Node.js", "Automation", "Workflow Engines"],
      github: "https://github.com/santhakumar2024",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Showcasing production-grade systems focused on business impact, scalability, and technical excellence.
            </p>
          </div>
          <a href="https://github.com/santhakumar2024" target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2 text-sm">
            <Github size={18} />
            View More on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 group border-transparent hover:border-primary-500/10"
            >
              <div className={`h-2 ${project.color}`} />
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-primary-500 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-slate-400 hover:text-primary-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">Business Impact</p>
                  <p className="text-sm font-medium">{project.impact}</p>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
