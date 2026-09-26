import React, { useEffect, useState, useRef } from 'react';

const BountyCard = ({ winner, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), index * 100);
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const rotation = useRef(Math.random() * 6 - 3).current;

  return (
    <div 
      ref={cardRef}
      className="relative w-[280px] sm:w-[300px] h-[460px] group transition-all duration-700 ease-out"
      style={{
        transform: isVisible ? `scale(1) translateY(0) rotate(${rotation}deg)` : 'scale(1.2) translateY(-50px) rotate(15deg)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7a1c1c] rounded-full z-20 shadow-[0_3px_5px_rgba(0,0,0,0.6)] border border-[#4a1111]">
        <div className="absolute top-1 left-1 w-1 h-1 bg-white/40 rounded-full"></div>
      </div>

      <div 
        className="w-full h-full p-4 flex flex-col items-center relative overflow-hidden shadow-[5px_10px_20px_rgba(0,0,0,0.8)] border-[0.5px] border-[#5d4037]/50"
        style={{ 
          backgroundColor: '#e6d5b3',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png"), radial-gradient(circle, #e6d5b3 60%, #c4aa7d 100%)',
          boxShadow: 'inset 0 0 40px rgba(139, 69, 19, 0.4), 10px 10px 25px rgba(0,0,0,0.7)'
        }}
      >
        <div className="absolute inset-2 border-[2px] border-[#4a3219] pointer-events-none opacity-80"></div>
        
        <h2 className="font-pirata text-6xl text-[#2a1b0a] tracking-[0.05em] mt-3 mb-2 scale-y-110">
          WANTED
        </h2>
        
        <div className="w-full h-48 bg-[#1a110a] mb-3 overflow-hidden border-[3px] border-[#2a1b0a] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
          {winner.logo ? (
            <img src={winner.logo} alt={winner.teamName} className="w-full h-full object-cover grayscale-[0.8] sepia-[0.6] contrast-[1.4] brightness-90 group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#d7c4a1] font-pirata text-6xl opacity-30">?</div>
          )}
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>
        </div>

        <h3 className="font-pirata text-3xl text-[#2a1b0a] leading-none mb-1 text-center w-full truncate px-4">
          {winner.teamName}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-x-1 mb-2 px-3 text-center h-8 overflow-hidden">
          {winner.crew?.slice(0,4).map((c, i) => (
            <span key={i} className="font-cormorant text-[10px] font-black text-[#4a3219] uppercase tracking-widest">
              {typeof c === 'object' ? c.name : c}{i < 3 && i < winner.crew.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>

        <div className="mt-auto w-full text-center">
          <p className="font-fell text-[11px] text-[#4a3219] font-bold tracking-[0.2em] mb-0">DEAD OR ALIVE</p>
          <p className="font-cinzel text-3xl font-black text-[#2a1b0a] tracking-wider scale-y-110 mt-1">
            <span className="text-xl mr-1 font-fell">฿</span>{winner.bounty}-
          </p>
          <p className="font-fell text-[8px] text-[#4a3219] tracking-[0.3em] mt-2 uppercase opacity-80 border-t border-[#4a3219]/30 pt-1 w-2/3 mx-auto">
            Marine Reward
          </p>
        </div>
        
        {winner.rank <= 3 && (
          <div className="absolute top-16 -right-4 w-20 h-20 border-[3px] border-[#7a1c1c] text-[#7a1c1c] rounded-full flex flex-col items-center justify-center rotate-[-15deg] opacity-80 mix-blend-multiply">
            <span className="font-fell text-[8px] tracking-widest uppercase font-bold leading-none mb-1">Rank</span>
            <span className="font-pirata text-4xl leading-none">#{winner.rank}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BountyCard;