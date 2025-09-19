import React from "react";
import SplitText from "../components/SplitText";
import AnimatedBackground from "../components/AnimatedBackground";
import FeaturedTraditions from "../components/FeaturedTraditions";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hawaMahal from "../assets/hawamahal.jpg";

const handleAnimationComplete = () => {
  console.log("All letters animated");
};

const LandingPage: React.FC = () => {
  return (
    <>
      <style>{`
      @keyframes pan-stars { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      @keyframes move-wave { 0% { transform: translateX(0) scaleX(1);} 50% { transform: translateX(-20px) scaleX(1.05);} 100% { transform: translateX(20px) scaleX(1);} }
      .wave { animation: move-wave 15s ease-in-out infinite alternate; transform-origin: center; }
      .wave-1 { animation-delay: 0s; } .wave-2 { animation-delay: -2s; animation-duration: 17s; } .wave-3 { animation-delay: -4s; animation-duration: 20s; }
      `}</style>

      <AnimatedBackground />
      <Header />

      <div className="relative z-10">
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <main>
            <SplitText text="VIRASAT" className="text-6xl md:text-8xl font-bold text-amber-300 font-serif" onLetterAnimationComplete={handleAnimationComplete} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl mt-4 text-gray-200">
              Where India's Heritage Comes Alive
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 max-w-xl mx-auto text-gray-400">
              Experience history, art, and tradition like never before—interactive, immersive, and timeless.
            </motion.p>

            <Link to="/states">
              <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} whileHover={{ scale: 1.03 }} className="mt-12 px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/40">
                Explore Now
              </motion.button>
            </Link>
          </main>
        </section>

        {/* Monuments / Manuscripts / Dance sections included in landing for scrollable page */}
        <section id="monuments" className="min-h-screen flex items-center justify-center bg-[#111] text-white px-6">
          <h2 className="text-5xl font-bold text-amber-300">Monuments of India</h2>
        </section>

        <section id="manuscripts" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white px-6">
          <h2 className="text-5xl font-bold text-amber-300">Ancient Manuscripts</h2>
        </section>

        <section id="dance" className="min-h-screen flex items-center justify-center bg-[#222] text-white px-6">
          <h2 className="text-5xl font-bold text-amber-300">Classical Dance Forms</h2>
        </section>

        <FeaturedTraditions />
      </div>
    </>
  );
};

export default LandingPage;
