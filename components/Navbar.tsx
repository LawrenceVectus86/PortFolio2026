
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Cpu, Mail, Sun, Moon } from 'lucide-react';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={20} />, id: 'hero' },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} />, id: 'projects' },
    { name: 'Skills', href: '#skills', icon: <Cpu size={20} />, id: 'skills' },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} />, id: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-max px-6">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="glass rounded-full px-4 py-3 border shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-2"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <motion.a
              key={link.id}
              href={link.href}
              className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-500 ${
                isActive 
                  ? 'text-white' 
                  : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full shadow-lg shadow-blue-500/20"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.icon}</span>
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    className="relative z-10 overflow-hidden text-xs font-bold tracking-tight whitespace-nowrap hidden sm:block"
                  >
                    {link.name.toUpperCase()}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>
          );
        })}
        
        <div className="w-[1px] h-6 dark:bg-white/10 bg-slate-900/10 mx-2" />
        
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center p-3 rounded-full transition-all duration-500 ${
            theme === 'dark' ? 'bg-white/5 text-yellow-400 hover:bg-yellow-400/10' : 'bg-slate-900/5 text-indigo-600 hover:bg-indigo-600/10'
          }`}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -40, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -40, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
