import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [imgSrc, setImgSrc] = useState('/assets/logo.png');

  return (
    <footer className="relative py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden border-t-2 border-[#4a3525] bg-[#050a14]">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/bg.gif" 
          alt="" 
          className="w-full h-full object-cover filter contrast-125 grayscale-[0.2] opacity-30" 
          onError={(e) => { e.target.style.display = 'none'; }} 
        />
        <div className="absolute inset-0 bg-[#050a14]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mb-8 flex justify-center items-center"
        >
          <img
            src={imgSrc}
            alt="Logo"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
            onError={() => {
              if (imgSrc !== '/assets/opl.png') setImgSrc('/assets/opl.png');
            }}
          />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-pirata text-4xl sm:text-5xl md:text-6xl text-[#f3e5c8] mb-5 tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          THE JOURNEY NEVER ENDS
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-fell italic text-[#e5b85c] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          "The true treasure isn't the gold at the end of the map. It's the storms we weathered and the crew we sailed with. That is the ultimate legacy!"
        </motion.p>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "96px" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="h-[2px] bg-[#8b1c1c] mb-10" 
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif-sc text-[10px] sm:text-[11px] font-bold text-[#8c6d3f] tracking-[0.25em] uppercase"
        >
          © {new Date().getFullYear()} NEXASOUL CHAMPIONSHIP • BUILT WITH GOL D. ROGER SPIRIT
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
