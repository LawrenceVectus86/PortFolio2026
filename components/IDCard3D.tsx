
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Cpu, MapPin, Sparkles } from 'lucide-react';
import Profil from '../components/img/Profil.png';

const IDCard3D: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative perspective-1000 flex flex-col items-center">
      {/* Hanging Cord/String */}
      <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-white/20 to-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
      
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateZ: [-1, 1, -1],
          y: [0, 5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[280px] h-[440px] glass rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden group cursor-pointer"
      >
        {/* Lanyard Clip Hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/40 rounded-full border border-white/10 z-20" />
        
        {/* Card Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 h-full p-6 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 mt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Cpu className="text-white" size={20} />
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] text-green-400 font-bold uppercase tracking-widest">Active</span>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative mb-6 self-center">
            <div className="w-28 h-28 rounded-full border-2 border-white/10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img 
                  src={Profil} 
                  alt="Calvin Lawrence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 p-1.5 rounded-full border-2 border-gray-900">
              <ShieldCheck size={16} className="text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="text-center flex-1">
            <h1 className="text-xl font-black mb-1 tracking-tight">Calvin Lawrence</h1>
            <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Junior Developer</p>
            
            <div className="space-y-3 inline-block text-left w-full mx-auto">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={12} className="shrink-0" />
                <span className="text-[10px]">Makassar, ID</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Sparkles size={12} className="shrink-0" />
                <span className="text-[10px]">At <b>Tech & Audio Visual Enthusiast</b></span>
              </div>
            </div>
          </div>

          {/* Barcode/Footer */}
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col items-center gap-2">
            <div className="flex gap-1 h-6">
              {[...Array(15)].map((_, i) => (
                <div key={i} className={`bg-white/20 w-[2px] h-full ${i % 3 === 0 ? 'opacity-40' : 'opacity-10'}`} />
              ))}
            </div>
            <span className="text-[8px] text-gray-500 font-mono tracking-widest uppercase">ID-042-CALVIN-DEV</span>
          </div>
        </div>

        {/* Holographic Overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default IDCard3D;
