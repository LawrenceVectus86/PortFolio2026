
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface Props {
  onLoadingComplete: () => void;
}

const DoorLoader: React.FC<Props> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 500);
          setTimeout(onLoadingComplete, 1500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-gray-950">
      <AnimatePresence>
        {!isDone && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute z-50 flex flex-col items-center gap-4 pointer-events-none"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <Cpu className="text-white" size={40} />
            </motion.div>
            <div className="text-center">
              <div className="text-blue-500 font-mono text-xl font-black tracking-widest">{progress}%</div>
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mt-1 animate-pulse">
                Initializing Systems...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={isDone ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full dark:bg-gray-900 bg-slate-200 border-r dark:border-white/10 border-slate-900/10 z-40 flex items-center justify-end"
      >
        <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute right-0 w-32 h-64 bg-blue-600/5 blur-[100px]" />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={isDone ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full dark:bg-gray-900 bg-slate-200 border-l dark:border-white/10 border-slate-900/10 z-40 flex items-center justify-start"
      >
        <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute left-0 w-32 h-64 bg-blue-600/5 blur-[100px]" />
      </motion.div>

      {/* Behind the doors glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default DoorLoader;
