// src/components/Header.tsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// 1. Searchbar component ko import karein
import Searchbar from "./Searchbar";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
    // scroll to top to simulate "home anchor"
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 p-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-serif cursor-pointer"
          onClick={goHome}
        >
          VIRASAT
        </motion.div>

        {/* 2. Nav links aur Searchbar ko ek saath group karein */}
        <div className="hidden md:flex items-center space-x-8">
          {/* 3. Yahan par Searchbar component add karein */}
          <Searchbar />

          <nav className="flex items-center space-x-8">
            <Link to="/monuments" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)]"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Monuments
            </Link>
            <Link to="/stories" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)]"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Stories
            </Link>
            <Link to="/states" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)] "
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              States
            </Link>
            <Link to="/unionterritories" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)]"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Union Territories
            </Link>
            <Link to="/plantrip" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)]"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Plan Your Trip
            </Link>
            <Link to="/store" className="bg-[linear-gradient(to_right,#FF9933,#FFFFFF,#138808)]"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              Store
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;