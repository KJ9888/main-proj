// src/components/AnimatedBackground.tsx
import React from "react";
import "./AnimatedBackground.css"; // for keyframes

const AnimatedBackground: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-70 z-0" />

    {/* Moving stars background */}
    <div
      className="absolute top-0 left-0 w-[200%] h-full opacity-30"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        animation: "pan-stars 120s linear infinite",
      }}
    />

    {/* Colorful tricolor waves */}
    <svg
      className="absolute bottom-[-50px] left-0 w-full h-1/2 z-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <defs>
        <linearGradient id="saffron-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,159,28,0.6)" />
          <stop offset="100%" stopColor="rgba(255,159,28,0)" />
        </linearGradient>
        <linearGradient id="white-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="green-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(19,136,8,0.6)" />
          <stop offset="100%" stopColor="rgba(19,136,8,0)" />
        </linearGradient>
      </defs>
      <path
        className="wave wave-1"
        fill="url(#saffron-gradient)"
        d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,208C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128V320H0Z"
      />
      <path
        className="wave wave-2"
        fill="url(#white-gradient)"
        d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
      />
      <path
        className="wave wave-3"
        fill="url(#green-gradient)"
        d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,250.7C672,256,768,224,864,197.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224V320H0Z"
      />
    </svg>
  </div>
);

export default AnimatedBackground;
