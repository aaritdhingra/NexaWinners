import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BountyWall from './components/BountyWall';
import AppreciationLetter from './components/AppreciationLetter';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';

const SEED_WINNERS = [
  {
    id: "rank-1",
    rank: 1,
    teamName: "YONKOOO",
    bounty: "4,048,900,000",
    avatar: "/assets/winners/yoonkoo-team.jpg",
    crew: [
      {
        name: "Kanishk Kamboj",
        role: "Captain",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Ranbir Khurana",
        role: "First Mate",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Lakshmi Deepak Kumar",
        role: "Combatant",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Saket Kumar Suman",
        role: "Sniper",
        avatar: "/assets/winners/m.jpg"
      }
    ]
  },
  {
    id: "rank-2",
    rank: 2,
    teamName: "THE CODE CORSAIRS",
    bounty: "3,996,000,000",
    avatar: "/assets/winners/code-corsairs-team.jpg",
    crew: [
      {
        name: "Anshu Chowdhury",
        role: "Captain",
        avatar: "/assets/winners/2.jpg"
      },
      {
        name: "Prince Sharma",
        role: "Commander",
        avatar: "/assets/winners/2.jpg"
      },
      {
        name: "Angel Gupta",
        role: "Sniper",
        avatar: "/assets/winners/2.jpg"
      },
      {
        name: "Mohit Raj",
        role: "Helmsman",
        avatar: "/assets/winners/2.jpg"
      }
    ]
  },
  {
    id: "rank-3",
    rank: 3,
    teamName: "PIRATES OF CARRAIBEAN",
    bounty: "3,000,000,000",
    avatar: "/assets/winners/pirates-of-carraibean-team.jpg",
    crew: [
      {
        name: "Piyush Bhalla",
        role: "Captain",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Siddhant Singh Sambyal",
        role: "Swordsman",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Shivang Singh Thakur",
        role: "Cook",
        avatar: "/assets/winners/m.jpg"
      },
      {
        name: "Abhishek Thakur",
        role: "Navigator",
        avatar: "/assets/winners/m.jpg"
      }
    ]
  }
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