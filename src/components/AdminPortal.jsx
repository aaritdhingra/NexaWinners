import React, { useState } from 'react';
import { CloseIcon, LockIcon } from './PirateIcons';

const AdminPortal = ({ onClose, refreshData }) => {
  const [keyInput, setKeyInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [bounty, setBounty] = useState('');
  const [rank, setRank] = useState(1);
  const [crewInput, setCrewInput] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const SECRET_KEY = "NEXASOUL";

  const handleKeySubmit = (e) => {
    e.preventDefault();
    if (keyInput.trim().toUpperCase() === SECRET_KEY) {
      setIsAuthenticated(true);
    } else {
      alert("INVALID SECRET KEY!");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('logo', file);
    setUploading(true);

    try {
      const res = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.url) setLogoUrl(data.url);
    } catch (err) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const crewArray = crewInput.split(',').map(c => c.trim()).filter(Boolean);
    
    const newWinner = { 
      teamName, 
      bounty, 
      rank: parseInt(rank), 
      crew: crewArray, 
      logo: logoUrl,
      competition: "Grand Line Championship", 
      year: "2024" 
    };
    
    await fetch('http://localhost:4000/api/winners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWinner)
    });
    
    refreshData();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#09101a] border-2 border-[#e5b85c] p-6 sm:p-8 relative shadow-2xl text-[#e5b85c]">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#e5b85c] hover:scale-110">
          <CloseIcon className="w-6 h-6" />
        </button>

        {!isAuthenticated ? (
          <form onSubmit={handleKeySubmit} className="space-y-6 text-center py-4">
            <div className="w-12 h-12 bg-[#7a1c1c] text-[#e5b85c] rounded-full mx-auto flex items-center justify-center border border-[#e5b85c]">
              <LockIcon className="w-6 h-6" />
            </div>
            <h2 className="font-pirata text-4xl text-[#e5b85c]">CAPTAIN'S PASSKEY REQUIRED</h2>
            <p className="font-fell text-xs opacity-70">ENTER SECRET KEY TO ACCESS FLEET COMMAND</p>
            <input 
              type="password"
              required 
              className="w-full bg-[#101926] border border-[#e5b85c]/50 p-3 text-center font-fell text-[#e5b85c] focus:outline-none tracking-widest"
              placeholder="ENTER KEY (Default: NEXASOUL)" 
              value={keyInput} 
              onChange={e => setKeyInput(e.target.value)} 
            />
            <button type="submit" className="w-full bg-[#7a1c1c] text-[#e5b85c] py-3 font-pirata text-2xl border border-[#e5b85c]/50 hover:bg-[#962525] transition-all">
              UNLOCK COMMAND
            </button>
          </form>
        ) : (
          <div>
            <h2 className="font-pirata text-4xl text-[#e5b85c] mb-6">Captain's Log (Admin)</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-fell text-xs uppercase mb-1 block">Team Name</label>
                <input required className="w-full bg-[#101926] border border-[#e5b85c]/40 p-3 font-fell text-[#e5b85c] focus:outline-none" placeholder="Straw Hat Pirates" value={teamName} onChange={e => setTeamName(e.target.value)} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-fell text-xs uppercase mb-1 block">Bounty Amount</label>
                  <input required className="w-full bg-[#101926] border border-[#e5b85c]/40 p-3 font-fell text-[#e5b85c] focus:outline-none" placeholder="5,608,800,000" value={bounty} onChange={e => setBounty(e.target.value)} />
                </div>
                <div>
                  <label className="font-fell text-xs uppercase mb-1 block">Rank</label>
                  <input type="number" min="1" required className="w-full bg-[#101926] border border-[#e5b85c]/40 p-3 font-fell text-[#e5b85c] focus:outline-none" value={rank} onChange={e => setRank(e.target.value)} />
                </div>
              </div>

              <div>
                <label className="font-fell text-xs uppercase mb-1 block">Crew Members (Comma separated)</label>
                <input className="w-full bg-[#101926] border border-[#e5b85c]/40 p-3 font-fell text-[#e5b85c] focus:outline-none" placeholder="Luffy, Zoro, Sanji" value={crewInput} onChange={e => setCrewInput(e.target.value)} />
              </div>

              <div>
                <label className="font-fell text-xs uppercase mb-1 block">Poster Logo Upload</label>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="w-full bg-[#101926] border border-[#e5b85c]/40 p-2 font-fell text-xs text-[#e5b85c]" />
                {uploading && <p className="text-xs text-amber-400 mt-1">Uploading image...</p>}
                {logoUrl && <p className="text-xs text-green-400 mt-1">Image uploaded!</p>}
              </div>

              <button type="submit" className="w-full mt-4 bg-[#7a1c1c] text-[#e5b85c] py-3 font-pirata text-2xl border border-[#e5b85c]/50 hover:bg-[#962525] transition-all">
                ISSUE WANTED POSTER
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;