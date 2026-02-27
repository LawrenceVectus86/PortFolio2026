
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.2em] text-sm"
        >
          SELECTED WORK
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mt-2"
        >
          Featured <span className="dark:text-gray-500 text-slate-400 italic">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col glass rounded-2xl overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
                  <ExternalLink size={20} />
                </a>
                <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-500/5 dark:bg-white/5 border border-blue-500/10 dark:border-white/10 rounded-full text-[10px] dark:text-gray-400 text-slate-500 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed mb-6 transition-colors duration-500">
                {project.description}
              </p>
              <button className="text-sm font-bold flex items-center gap-2 group/btn">
                View Details
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                >
                   →
                </motion.div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
