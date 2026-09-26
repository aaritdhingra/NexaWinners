import React from 'react';
import { CloseIcon } from './PirateIcons';

const WinnerModal = ({ winner, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#d1a762] border-[10px] border-[#8c6734] p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        <button onClick={onClose} className="absolute top-3 right-3 p-2 text-[#4a3219] hover:scale-110 transition-transform">
          <CloseIcon className="w-8 h-8" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center relative z-10">
          <div className="w-56 h-72 bg-[#1a110a] border-4 border-[#4a3219] overflow-hidden flex-shrink-0">
            {winner.logo ? (
              <img src={winner.logo} alt={winner.teamName} className="w-full h-full object-cover grayscale contrast-125" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#d1a762] font-pirata text-6xl">?</div>
            )}
          </div>
          
          <div className="flex-1 text-[#2a1b0a]">
            <p className="font-fell text-sm mb-1 uppercase tracking-widest font-bold opacity-80">Wanted Reward</p>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-black mb-4 border-b-2 border-[#4a3219] pb-2 text-[#2a1b0a]">
              ฿{winner.bounty}
            </h2>
            
            <h3 className="font-pirata text-4xl mb-4 text-[#7a1c1c]">{winner.teamName}</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-fell font-bold text-sm border-b border-[#4a3219]/40 inline-block mb-2 uppercase">CREW MEMBERS</h4>
                <div className="flex flex-wrap gap-2">
                  {winner.crew?.map((member, i) => (
                    <span key={i} className="font-cormorant font-bold text-sm px-3 py-1 bg-[#4a3219]/15 border border-[#4a3219]/30 rounded">
                      {typeof member === 'object' ? member.name : member}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-3 italic font-cormorant text-base border-t border-[#4a3219]/30 text-[#4a3219]">
                Awarded for {winner.competition || 'Grand Hunt'} ({winner.year || '2024'})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;