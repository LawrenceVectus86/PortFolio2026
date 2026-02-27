
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import IDCard3D from './IDCard3D';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="relative z-10 text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              Available for collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
          >
            Crafting <br />
            <span className="text-gradient">Next-Gen Web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl dark:text-gray-400 text-slate-600 mb-10 max-w-xl font-light leading-relaxed transition-colors duration-500"
          >
            Senior Software Engineer at <b>Tech Global Corp</b>. 
            I bridge the gap between complex engineering and pixel-perfect design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold flex items-center gap-2 overflow-hidden transition-all hover:pr-12 shadow-xl shadow-blue-500/10"
            >
              Explore Projects
              <ArrowRight size={20} className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
            
            <div className="flex items-center gap-6">
              <a href="#" className="dark:text-gray-400 text-slate-500 hover:text-blue-500 dark:hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="dark:text-gray-400 text-slate-500 hover:text-blue-500 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="dark:text-gray-400 text-slate-500 hover:text-blue-500 dark:hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Hanging ID Card Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <IDCard3D />
            
            {/* Ambient Background Glow for the Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10" />
          </div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 dark:text-gray-500 text-slate-400 cursor-pointer hidden md:block"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-600/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Hero;
