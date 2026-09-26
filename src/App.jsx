import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BountyWall from './components/BountyWall';
import AppreciationLetter from './components/AppreciationLetter';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';

const SEED_WINNERS = [
  { id: "1", rank: 1, teamName: "Straw Hat Pirates", bounty: "5,608,800,000", crew: ["Luffy", "Zoro", "Sanji", "Nami"], logo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80" },
  { id: "2", rank: 2, teamName: "Heart Pirates", bounty: "3,000,000,000", crew: ["Law", "Bepo", "Jean Bart", "Shachi"], logo: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80" },
  { id: "3", rank: 3, teamName: "Kid Pirates", bounty: "3,000,000,000", crew: ["Kid", "Killer", "Heat", "Wire"], logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
  { id: "4", rank: 4, teamName: "Red Hair Pirates", bounty: "4,048,900,000", crew: ["Shanks", "Beckman", "Roo", "Yasopp"], logo: "https://images.unsplash.com/photo-1598371839696-5e5bb00b0f4d?w=600&auto=format&fit=crop&q=80" },
  { id: "5", rank: 5, teamName: "Whitebeard Pirates", bounty: "5,046,000,000", crew: ["Newgate", "Marco", "Ace", "Jozu"], logo: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=600&auto=format&fit=crop&q=80" },
  { id: "6", rank: 6, teamName: "Roger Pirates", bounty: "5,564,800,000", crew: ["Roger", "Rayleigh", "Gaban", "Crocus"], logo: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=600&auto=format&fit=crop&q=80" },
  { id: "7", rank: 7, teamName: "Blackbeard Pirates", bounty: "3,996,000,000", crew: ["Teach", "Burgess", "Augur", "Van Augur"], logo: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=600&auto=format&fit=crop&q=80" },
  { id: "8", rank: 8, teamName: "Kuja Pirates", bounty: "1,659,000,000", crew: ["Hancock", "Sandersonia", "Marigold", "Marguerite"], logo: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80" },
  { id: "9", rank: 9, teamName: "Firetank Pirates", bounty: "1,380,000,000", crew: ["Bege", "Vito", "Gotti", "Chiffon"], logo: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80" },
  { id: "10", rank: 10, teamName: "Sun Pirates", bounty: "1,100,000,000", crew: ["Fisher Tiger", "Jinbe", "Arlong", "Aladdin"], logo: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=600&auto=format&fit=crop&q=80" }
];

function App() {
  const [winners, setWinners] = useState(SEED_WINNERS);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/winners')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setWinners(data.sort((a, b) => a.rank - b.rank)); })
      .catch(() => console.log("Using seed data"));
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5b85c] selection:bg-[#dc2626] selection:text-white font-cormorant">
      <Navbar onAdminClick={() => setAdminOpen(true)} />
      
      <Hero />
      
      <BountyWall winners={winners} />

      <AppreciationLetter />

      <Footer />

      {adminOpen && <AdminPortal onClose={() => setAdminOpen(false)} refreshData={() => window.location.reload()} />}
    </div>
  );
}

export default App;