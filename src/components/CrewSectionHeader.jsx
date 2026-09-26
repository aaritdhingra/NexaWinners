import React from "react";
import "./CrewSectionHeader.css";

const CrownEmblem = () => (
  <g>
    <circle cx="60" cy="60" r="38" className="emblem-ring" />
    <circle cx="60" cy="60" r="30" className="emblem-ring-thin" />
    <path className="emblem-line" d="M60 14 L66 42 M60 106 L54 78 M14 60 L42 54 M106 60 L78 66 M27 27 L47 47 M93 27 L73 47 M27 93 L47 73 M93 93 L73 73" />
    <circle cx="60" cy="60" r="8" className="emblem-core" />
    <path className="emblem-line" d="M60 42 L65 54 L78 60 L65 66 L60 78 L55 66 L42 60 L55 54 Z" />
  </g>
);

const CrossedSwordsEmblem = () => (
  <g>
    <circle cx="60" cy="60" r="38" className="emblem-ring" />
    <circle cx="60" cy="60" r="30" className="emblem-ring-thin" />
    <path className="emblem-line" d="M32 88 L88 32 M88 32 L82 30 M88 32 L90 38" />
    <path className="emblem-line" d="M28 84 L36 92 M34 80 L42 88" />
    <path className="emblem-line" d="M88 88 L32 32 M32 32 L38 30 M32 32 L30 38" />
    <path className="emblem-line" d="M92 84 L84 92 M86 80 L78 88" />
    <circle cx="60" cy="60" r="7" className="emblem-core" />
  </g>
);

const CompassEmblem = () => (
  <g>
    <circle cx="60" cy="60" r="38" className="emblem-ring" />
    <circle cx="60" cy="60" r="28" className="emblem-ring-thin" />
    <path className="emblem-core" d="M60 18 L68 52 L102 60 L68 68 L60 102 L52 68 L18 60 L52 52 Z" />
  </g>
);

export default function CrewSectionHeader({
  number = "01",
  title = "CHAMPION CREW",
  subtitle = "THE GRAND LINE'S CHAMPIONS",
  theme = "gold",
}) {
  return (
    <div className={"crew-header-wrapper " + theme}>
      <div className="crew-header-container">
        <svg className="crew-emblem" viewBox="0 0 120 120" aria-hidden="true">
          {theme === "gold" && <CrownEmblem />}
          {theme === "silver" && <CrossedSwordsEmblem />}
          {theme === "copper" && <CompassEmblem />}
        </svg>

        <svg className="crew-plaque" viewBox="0 0 900 150" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="plaque-outline"
            d="M95 25 L125 12 L775 12 L805 25 L830 52 L805 75 L830 98 L775 138 L125 138 L95 125 L70 98 L95 75 L70 52 Z"
          />
          <path
            className="plaque-inner"
            d="M112 35 L137 25 L763 25 L788 35 L807 52 L788 68 L807 85 L763 125 L137 125 L112 115 L93 98 L112 75 L93 52 Z"
          />
          <path className="side-ornament" d="M70 52 L30 52 L10 40 M70 62 L20 62 L4 52 M70 88 L20 88 L4 98 M70 98 L30 98 L10 110" />
          <path className="side-ornament" d="M830 52 L870 52 L890 40 M830 62 L880 62 L896 52 M830 88 L880 88 L896 98 M830 98 L870 98 L890 110" />
          <path className="detail-diamond" d="M128 75 L138 65 L148 75 L138 85 Z" />
          <path className="detail-diamond" d="M752 75 L762 65 L772 75 L762 85 Z" />
        </svg>

        <div className="crew-header-content">
          <span className="crew-number">{number}</span>
          <span className="crew-title">{title}</span>
        </div>
      </div>

      <div className="crew-subtitle">
        <span className="subtitle-wing" />
        <span className="subtitle-text">{subtitle}</span>
        <span className="subtitle-wing" />
      </div>
    </div>
  );
}
