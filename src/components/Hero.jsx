import React from 'react';

const Hero = () => {
  const scrollToBounties = () => {
    const element = document.getElementById('bounty-wall');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="overview"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden px-6 md:px-16 lg:px-24 pt-28 pb-12"
      style={{
        backgroundImage: 'url("/assets/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-2xl text-left flex flex-col items-start pt-6">
        
        {/* Red Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-600/70 bg-red-950/80 backdrop-blur-sm mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-[11px] font-bold tracking-[0.22em] uppercase">
            THE VOYAGE CONCLUDES
          </span>
        </div>

        {/* Headlines with Soft Classy Sparkly Glow */}
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-extrabold text-[#EAB308] tracking-wide leading-[0.9] uppercase mb-1 font-serif"
          style={{
            fontFamily: "'Pirata One', 'Rye', serif",
            textShadow: '0 0 12px rgba(234, 179, 8, 0.35), 0 3px 8px rgba(0, 0, 0, 0.95)'
          }}
        >
          CONGRATULATIONS
        </h1>
        
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-wide leading-[0.95] uppercase mb-6 font-serif"
          style={{
            fontFamily: "'Pirata One', 'Rye', serif",
            textShadow: '0 0 8px rgba(255, 255, 255, 0.25), 0 3px 8px rgba(0, 0, 0, 0.95)'
          }}
        >
          TO THE VICTORS
        </h2>

        {/* Subtitle with Gold Bar */}
        <div className="border-l-2 border-[#D4AF37] pl-4 py-1 mb-6 max-w-xl">
          <p className="text-gray-200 text-sm md:text-base font-serif leading-relaxed drop-shadow">
            The Grand Line has been conquered. After days of relentless coding, designing, and surviving the brutal seas of development, our champions have emerged.
          </p>
        </div>

        {/* NexaSoul Speaks Box */}
        <div className="relative w-full max-w-xl border border-[#D4AF37]/40 bg-black/80 backdrop-blur-md p-5 rounded-sm mb-8 shadow-lg">
          <div className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-bold tracking-[0.2em] px-3 py-0.5 uppercase shadow-md">
            NEXASOUL SPEAKS
          </div>
          <p className="text-[#F5E6AB] italic font-serif text-xs md:text-sm leading-relaxed">
            "Wealth, Fame, Power... The ultimate prototypes have been forged! Scroll down to witness the absolute pinnacle of frontend mastery. The new era is here!"
          </p>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToBounties}
          className="group flex flex-col items-start gap-1 text-[#D4AF37] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase">
            SCROLL TO VIEW BOUNTIES
          </span>
          <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-y-1.5 text-[#D4AF37]">
            ↓
          </span>
        </button>

      </div>
    </section>
  );
};

export default Hero;
