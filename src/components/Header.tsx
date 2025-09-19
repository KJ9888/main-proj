import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
          className="text-2xl font-bold font-serif cursor-pointer"
          onClick={goHome}
        >
          VIRASAT
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/monuments" className="text-gray-300 hover:text-white">
            Monuments
          </Link>
          <Link to="/manuscripts" className="text-gray-300 hover:text-white">
            Manuscripts
          </Link>
          <Link to="/dance" className="text-gray-300 hover:text-white">
            Dance Forms
          </Link>
          <Link to="/culture" className="text-gray-300 hover:text-white">
            Culture
          </Link>
          <Link to="/states" className="text-gray-300 hover:text-white">
            Explore States
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
