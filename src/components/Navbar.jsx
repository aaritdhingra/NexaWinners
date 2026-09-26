import React from 'react';
import { GearIcon } from './PirateIcons';

const Navbar = ({ onOpenAdmin }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-[#D4AF37]/30 px-6 py-3.5 flex justify-between items-center">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-4">
        <img src="/assets/opl.png" alt="Logo" className="h-10 w-auto object-contain" />
        <div className="flex flex-col border-l border-[#D4AF37]/30 pl-4">
          <span className="text-white font-serif tracking-[0.15em] text-base md:text-lg leading-tight uppercase font-bold">
            THE GRAND TREASURE
          </span>
          <span className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-sans">
            NexaSoul • Championship Edition
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6 md:gap-8">
        <div className="hidden md:flex gap-6">
          <a href="#overview" className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.2em] transition-colors uppercase">
            Overview
          </a>
          <a href="#bounty-wall" className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.2em] transition-colors uppercase">
            Bounties & Jury
          </a>
        </div>

        <div className="flex items-center gap-5">
          {/* Ship Wheel Settings Icon */}
          <button 
            onClick={onOpenAdmin}
            title="Admin Settings"
            className="text-[#D4AF37] hover:rotate-180 transition-transform duration-700 p-1 rounded-full hover:bg-[#D4AF37]/10"
          >
            <GearIcon className="w-6 h-6" />
          </button>
          
          {/* PIRATE BADGE JOIN FLEET BUTTON */}
          <a 
            href="#bounty-wall" 
            className="relative px-5 py-2 bg-[#120F0A] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-2.5 group cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.15)]"
          >
            {/* Corner Gold Flourishes */}
            <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t-2 border-l-2 border-[#F3E5AB]"></span>
            <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t-2 border-r-2 border-[#F3E5AB]"></span>
            <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b-2 border-l-2 border-[#F3E5AB]"></span>
            <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b-2 border-r-2 border-[#F3E5AB]"></span>

            <img 
              src="/assets/opl.png" 
              alt="Fleet" 
              className="w-4 h-4 object-contain group-hover:brightness-0 transition-all"
            />
            <span className="font-serif text-xs font-bold tracking-[0.2em] uppercase">
              JOIN FLEET
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
