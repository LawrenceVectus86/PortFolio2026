
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface Props {
  scrollProgress: MotionValue<number>;
}

const Background3D: React.FC<Props> = ({ scrollProgress }) => {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, 400]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, 180]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 select-none">
      {/* Ambient Gradient Blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"
      />
      
      {/* Floating Grid */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }} 
      />

      {/* Floating Geometric Elements (CSS 3D) */}
      <motion.div 
        style={{ rotateZ: rotate, y: y1 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-400/20 rounded-lg transform rotate-45"
      />
      <motion.div 
        style={{ rotateZ: rotate, y: y2, x: 100 }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-purple-400/10 rounded-full"
      />
    </div>
  );
};

export default Background3D;
