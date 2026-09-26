import React from 'react';
import { SkullIcon } from './PirateIcons';

const GrandLineBanner = () => {
  return (
    <section className="relative py-20 px-6 bg-[#09101a] overflow-hidden border-t-2 border-[#fbbf24]/20">
      {/* GIF Background Container - Exact match to Screenshot 4 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/bg.gif" 
          alt="Grand Line Animated Backdrop" 
          className="w-full h-full object-cover opacity-40 filter contrast-125 brightness-90" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09101a]/80 via-[#09101a]/60 to-[#09101a]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Skull Icon Badge */}
        <div className="w-14 h-14 rounded-full bg-[#7a1c1c] border-2 border-[#fbbf24] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(251,191,36,0.5)]">
          <SkullIcon className="w-8 h-8 text-[#fbbf24]" />
        </div>

        {/* Title & Subtitle */}
        <h2 className="font-pirata text-5xl sm:text-7xl text-[#fbbf24] mb-2 tracking-wider uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
          THE GRAND TREASURE — NEXASOUL
        </h2>
        <p className="font-fell text-xs sm:text-sm text-[#dc2626] font-bold tracking-[0.25em] uppercase mb-8">
          ONE PIECE & GOL D. ROGER THEMATIC WINNERS EDITION
        </p>

        {/* Golden Quote Box */}
        <div className="w-full max-w-3xl bg-[#09101a]/85 border-2 border-[#fbbf24]/60 rounded-xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-md mb-10">
          <p className="font-fell italic text-lg sm:text-xl text-[#fbbf24] leading-relaxed mb-4">
            "Destiny. The swelling tide of time. The dreams of humanity. These are things that cannot be stopped! As long as developers seek the answer to freedom, the spirit of code will never cease to be!"
          </p>
          <p className="font-fell text-xs sm:text-sm font-bold tracking-[0.2em] text-[#dc2626] uppercase">
            — GOL D. ROGER • KING OF THE PIRATES
          </p>
        </div>

        {/* Navigation / Feature Pills Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 bg-[#09101a]/80 border border-[#fbbf24]/30 rounded-full px-6 py-3 backdrop-blur-md mb-12 text-xs sm:text-sm font-fell font-bold tracking-widest text-gray-300">
          <a href="#hero" className="hover:text-[#fbbf24] transition-colors">Voyage Start</a>
          <span className="text-[#fbbf24]/40">•</span>
          <span className="text-gray-400">Grand Line Manifesto</span>
          <span className="text-[#fbbf24]/40">•</span>
          <a href="#bounty-wall" className="text-[#fbbf24] hover:underline">Bounties & Jury</a>
          <span className="text-[#fbbf24]/40">•</span>
          <span className="text-gray-400">Victory Hall</span>
        </div>

        {/* Footer Meta Details Strip */}
        <div className="w-full border-t border-[#fbbf24]/20 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-fell tracking-widest text-gray-400 uppercase gap-3">
          <div>
            VENUE: <span className="text-[#fbbf24]">GRAND LINE ARENA</span> • DATE: <span className="text-[#fbbf24]">2024</span>
          </div>
          <div>
            CRAFTED FOR <span className="text-[#fbbf24]">NEXASOUL GRAND TREASURE</span> WITH GOL D. ROGER SPIRIT
          </div>
        </div>

      </div>
    </section>
  );
};

export default GrandLineBanner;