import React from "react";
import PosterPlaceholder from "./PosterPlaceholder.jsx";

export default function BountyBoard() {
  return (
    <div className="bounty-board">
      <h3 className="board-title font-fell">THE BOUNTY WALL</h3>
      <div className="posters">
        <div className="row">
          <PosterPlaceholder rank={1} size="lg" rotate={-2} />
        </div>
        <div className="row">
          <PosterPlaceholder rank={2} size="md" rotate={3} />
          <PosterPlaceholder rank={3} size="md" rotate={-3} />
        </div>
        <div className="row">
          <PosterPlaceholder rank={4} size="sm" rotate={-1} />
          <PosterPlaceholder rank={5} size="sm" rotate={2} />
          <PosterPlaceholder rank={6} size="sm" rotate={-2} />
        </div>
        <div className="row">
          <PosterPlaceholder rank={7} size="sm" rotate={2} />
          <PosterPlaceholder rank={8} size="sm" rotate={-1} />
          <PosterPlaceholder rank={9} size="sm" rotate={3} />
          <PosterPlaceholder rank={10} size="sm" rotate={-2} />
        </div>
      </div>
    </div>
  );
}