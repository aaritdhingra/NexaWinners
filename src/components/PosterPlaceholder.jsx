import React from "react";

export default function PosterPlaceholder({ rank, size = "sm", rotate = 0 }) {
  return (
    <div className="poster-wrapper" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={`poster size-${size}`}>
        <div className="pin" />
        <div className="poster-inner">
          <div className="p-wanted font-fell">WANTED</div>
          <div className="p-dead font-fell">DEAD OR ALIVE</div>
          
          <div className="p-img">
            <span className="font-pirata" style={{opacity: 0.4, fontSize: "1.5rem"}}>NO PHOTO</span>
          </div>
          
          <div className="p-name font-pirata">Crew Rank #{rank}</div>
          
          <div className="p-reward">
            <span className="font-fell">REWARD</span>
            <strong className="font-cinzel"><span style={{color: "#8b1c1c"}}>฿</span> 000,000</strong>
          </div>
          
          <div className="p-crew font-cormorant">Details Unknown</div>
        </div>
      </div>
    </div>
  );
}