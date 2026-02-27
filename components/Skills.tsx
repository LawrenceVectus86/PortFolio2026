
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Figma, Layers, Terminal, Cpu, Globe, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const skillsData = [
    { name: "React", icon: <Layout className="text-blue-400" />, category: "Frontend" },
    { name: "TypeScript", icon: <Code2 className="text-blue-500" />, category: "Frontend" },
    { name: "Tailwind", icon: <Layers className="text-teal-400" />, category: "Frontend" },
    { name: "HTML", icon: <Globe className="text-blue-300 dark:text-white" />, category: "Frontend" },
    { name: "Node.js", icon: <Terminal className="text-green-500" />, category: "Backend" },
    { name: "MySQL", icon: <Database className="text-indigo-400" />, category: "Backend" },
    { name: "Figma", icon: <Figma className="text-purple-500" />, category: "Design" },
    { name: "System Design", icon: <Cpu className="text-orange-400" />, category: "Architecture" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase"
        >
          Tech Stack
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mt-2 mb-4"
        >
          Core <span className="text-gradient">Capabilities.</span>
        </motion.h2>
        <p className="dark:text-gray-400 text-slate-600 max-w-2xl mx-auto transition-colors duration-500">
          A curated selection of the technologies I use to build world-class digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)" 
            }}
            className="group relative glass p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all border hover:border-blue-500/50"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-500/5 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-600/10 group-hover:scale-110 transition-all">
              {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
            </div>
            <span className="font-bold dark:text-gray-200 text-slate-800 transition-colors duration-500">{skill.name}</span>
            <span className="text-[10px] dark:text-gray-500 text-slate-400 uppercase tracking-widest mt-1">{skill.category}</span>
            
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 glass p-10 rounded-[3rem] text-center border-dashed border-slate-900/10 dark:border-white/10">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-3">
          <Sparkles className="text-yellow-500" size={20} />
          Always Learning
        </h3>
        <p className="dark:text-gray-400 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed transition-colors duration-500">
          The tech landscape evolves every day. I'm currently exploring WebAssembly, 
          advanced LLM fine-tuning, and ultra-low-latency real-time communication systems.
        </p>
      </div>
    </div>
  );
};

export default Skills;
