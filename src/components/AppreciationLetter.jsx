import React, { useState } from "react";

export default function AppreciationLetter() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/assets/letter.png";
    link.download = "NexaSoul_Voyage_To_Remember.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 900);
  };

  return (
    <section
      id="appreciation"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-20 sm:py-24"
    >
      {/* bg2 — visible, not crushed */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg2.png"
          alt=""
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* light wash only — bg zyada dikhe */}
        <div className="absolute inset-0 bg-[#050a14]/35 pointer-events-none" />
      </div>

      {/* letter + download */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="relative w-full">
          <img
            src="/assets/letter.png"
            alt="A Voyage to Remember — NexaSoul"
            className="w-full h-auto max-h-[90vh] object-contain select-none"
            style={{
              filter: "drop-shadow(0 22px 40px rgba(0,0,0,0.65))",
            }}
            draggable={false}
          />

          {/* subtle download — bottom-right on letter */}
          <button
            type="button"
            onClick={handleDownload}
            title="Download letter"
            aria-label="Download appreciation letter"
            disabled={downloading}
            className="absolute bottom-[4%] right-[4%] sm:bottom-[5%] sm:right-[5%] group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1a1208]/55 border border-[#e5b85c]/35 text-[#e5b85c] hover:bg-[#1a1208]/80 hover:border-[#e5b85c]/70 transition-all duration-300 backdrop-blur-[2px] shadow-[0_4px_14px_rgba(0,0,0,0.45)] disabled:opacity-60"
          >
            {downloading ? (
              <span className="block w-4 h-4 border-2 border-[#e5b85c] border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg
                className="w-[18px] h-[18px] sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 19h14" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
