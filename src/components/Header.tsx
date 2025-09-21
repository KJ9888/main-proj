// src/components/Header.tsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import TextType from "./TextType"; // ✅ ensure default export in TextType.js

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 p-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center text-white">
        
        {/* Logo / Home text */}
        <div
          onClick={goHome}
          className="cursor-pointer font-extrabold text-2xl tracking-wide"
        >
          <TextType
            text={[
              "Welcome to Virasat",
              "A Legacy That Lives On",
              "Discover India's Heritage",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Nav links + Searchbar */}
        <div className="hidden md:flex items-center space-x-8">
          <Searchbar />

          <nav className="flex items-center space-x-8 font-semibold">
            <Link
              to="/monuments"
              className=" bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] bg-clip-text text-transparent font-extrabold text-lg"
            >
              Monuments
            </Link>
            <Link
              to="/stories"
              className="bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] bg-clip-text text-transparent font-extrabold text-lg"
            >
              Stories
            </Link>
            <Link
              to="/states"
              className="bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] bg-clip-text text-transparent font-extrabold text-lg"
            >
              States & UT's
            </Link>
           
            <Link
              to="/plantrip"
              className="bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] bg-clip-text text-transparent font-extrabold text-lg"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/store"
              className="bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] bg-clip-text text-transparent font-extrabold text-lg"
            >
              Store
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
