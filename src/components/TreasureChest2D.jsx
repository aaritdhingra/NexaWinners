import React from 'react';
import { SkullIcon } from './PirateIcons';

const TreasureChest2D = ({ isOpen, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-72 h-56 md:w-80 md:h-64 cursor-pointer group mx-auto my-4 transition-transform duration-300 hover:scale-105"
    >
      {/* Golden Aura Glow */}
      <div className={`absolute -inset-6 rounded-full blur-2xl transition-all duration-1000 ${isOpen ? 'bg-[#e5b85c]/40 opacity-100 scale-125' : 'bg-[#e5b85c]/10 opacity-50 group-hover:opacity-80'}`}></div>

      {/* Chest Container */}
      <div className="relative w-full h-full flex flex-col justify-end">
        
        {/* Lid (Top Half with hinge rotation) */}
        <div 
          className={`relative w-full h-28 bg-[#3d2514] border-4 border-[#8c6734] rounded-t-3xl shadow-2xl transition-all duration-700 transform origin-bottom z-20 ${isOpen ? '-rotate-45 -translate-y-8 opacity-90' : 'rotate-0'}`}
          style={{
            backgroundImage: 'radial-gradient(circle, #4a2e18 0%, #2a180b 100%)',
            boxShadow: isOpen ? '0 0 30px rgba(229,184,92,0.8)' : '0 10px 25px rgba(0,0,0,0.8)'
          }}
        >
          {/* Metal Straps */}
          <div className="absolute left-6 top-0 bottom-0 w-5 bg-[#1a110a] border-x border-[#8c6734]"></div>
          <div className="absolute right-6 top-0 bottom-0 w-5 bg-[#1a110a] border-x border-[#8c6734]"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-[#1a110a] border-x border-[#8c6734] flex items-center justify-center">
            <SkullIcon className="w-5 h-5 text-[#e5b85c]" />
          </div>
        </div>

        {/* Gold Light Burst inside when open */}
        {isOpen && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 z-15 w-64 h-24 bg-[#e5b85c] rounded-full blur-xl opacity-90 animate-pulse"></div>
        )}

        {/* Base (Bottom Half) */}
        <div 
          className="relative w-full h-32 bg-[#2a180b] border-4 border-[#8c6734] rounded-b-xl shadow-2xl z-10 overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(circle, #3d2514 0%, #1a110a 100%)' }}
        >
          {/* Metal Straps */}
          <div className="absolute left-6 top-0 bottom-0 w-5 bg-[#1a110a] border-x border-[#8c6734]"></div>
          <div className="absolute right-6 top-0 bottom-0 w-5 bg-[#1a110a] border-x border-[#8c6734]"></div>
          
          {/* Keyhole Lock Plate */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-12 bg-[#8c6734] border-2 border-[#e5b85c] rounded flex items-center justify-center shadow-md">
            <div className="w-3 h-5 bg-[#1a110a] rounded-full"></div>
          </div>

          {/* Gold Doubloons inside base */}
          <div className="absolute bottom-2 inset-x-8 h-8 flex flex-wrap justify-center gap-1 opacity-80">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-[#e5b85c] border border-[#8c6734] shadow-inner"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureChest2D;