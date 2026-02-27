
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Background3D from './components/Background3D';
import DoorLoader from './components/DoorLoader';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  // Theme synchronization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (t: 'light' | 'dark') => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(t);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-slate-50 text-slate-900'}`} 
      ref={containerRef}
    >
      <AnimatePresence mode="wait">
        {isLoading && (
          <DoorLoader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Background 3D Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30">
          <Background3D scrollProgress={scrollYProgress} />
        </div>

        {/* Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[110] origin-left"
          style={{ scaleX }}
        />

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="relative z-10 pb-32">
          <section id="hero">
            <Hero />
          </section>

          <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16">
            <Projects />
          </section>

          <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16 dark:bg-black/20 bg-slate-200/20">
            <Skills />
          </section>

          <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16">
            <Contact />
          </section>
        </main>

        <footer className="relative z-10 py-12 border-t dark:border-white/10 border-slate-900/10 text-center dark:text-gray-500 text-slate-500 text-sm mb-20">
          <p>© {new Date().getFullYear()} Calvin Lawrence. Built with passion & intelligence.</p>
        </footer>

        <AIAssistant />
      </motion.div>
    </div>
  );
};

export default App;
