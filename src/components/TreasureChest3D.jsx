import React from 'react';

const TreasureChest3D = ({ isOpen, onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="relative w-72 h-52 sm:w-80 sm:h-60 mx-auto cursor-pointer group transition-transform duration-300 hover:scale-105 select-none"
    >
      {/* Gold Glow Effect on Open */}
      <div className={`absolute -inset-8 rounded-full blur-3xl transition-all duration-700 ${isOpen ? 'bg-[#e5b85c]/60 scale-125 opacity-100' : 'bg-[#e5b85c]/20 opacity-30 group-hover:opacity-70'}`}></div>

      {/* Chest Container */}
      <div className="relative w-full h-full flex flex-col justify-end items-center">
        
        {/* Animated Hinged Lid */}
        <div 
          className={`relative w-full h-28 bg-[#3d2514] border-4 border-[#8c6734] rounded-t-3xl shadow-2xl transition-all duration-700 transform origin-bottom z-20 overflow-hidden ${
            isOpen ? '-rotate-[55deg] -translate-y-8 opacity-90' : 'rotate-0'
          }`}
          style={{
            backgroundImage: 'linear-gradient(180deg, #4a2e18 0%, #2a180b 100%)',
            boxShadow: isOpen ? '0 0 40px #e5b85c' : '0 10px 25px rgba(0,0,0,0.8)'
          }}
        >
          {/* Gold Metal Bands */}
          <div className="absolute left-6 top-0 bottom-0 w-6 bg-[#1a110a] border-x-2 border-[#8c6734]"></div>
          <div className="absolute right-6 top-0 bottom-0 w-6 bg-[#1a110a] border-x-2 border-[#8c6734]"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-10 bg-[#1a110a] border-x-2 border-[#8c6734] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-[#e5b85c] bg-[#7a1c1c]"></div>
          </div>
        </div>

        {/* Inner Gold Pile Light Burst when Open */}
        {isOpen && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 w-60 h-20 bg-[#e5b85c] rounded-full blur-lg opacity-95 animate-pulse flex items-center justify-center">
            <span className="font-pirata text-2xl text-[#2a1b0a]">TREASURE UNLOCKED</span>
          </div>
        )}

        {/* Chest Base */}
        <div 
          className="relative w-full h-32 bg-[#2a180b] border-4 border-[#8c6734] rounded-b-2xl shadow-2xl z-10 overflow-hidden"
          style={{ backgroundImage: 'linear-gradient(180deg, #3d2514 0%, #1a110a 100%)' }}
        >
          {/* Gold Metal Bands */}
          <div className="absolute left-6 top-0 bottom-0 w-6 bg-[#1a110a] border-x-2 border-[#8c6734]"></div>
          <div className="absolute right-6 top-0 bottom-0 w-6 bg-[#1a110a] border-x-2 border-[#8c6734]"></div>
          
          {/* Lock Plate */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-14 bg-[#8c6734] border-2 border-[#e5b85c] rounded-md flex items-center justify-center shadow-lg">
            <div className="w-4 h-6 bg-[#1a110a] rounded-full border border-[#e5b85c]/50"></div>
          </div>

          {/* Gold Doubloons inside */}
          <div className="absolute bottom-3 inset-x-8 h-8 flex flex-wrap justify-center gap-1 opacity-90">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-[#e5b85c] border border-[#8c6734] shadow-md"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureChest3D;