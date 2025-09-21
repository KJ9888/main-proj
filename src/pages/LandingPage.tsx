// src/pages/LandingPage.tsx

import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import FeaturedTraditions from "../components/FeaturedTraditions";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const scrollFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LandingPage: React.FC = () => {
  return (
    <>
      <AnimatedBackground /> {/* 🔥 Tumhari running animation back in action */}
      <Header />
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        >
          {/* Heading */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="
              text-6xl md:text-8xl font-bold font-serif
              text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-500
              drop-shadow-[0_0_25px_rgba(255,200,150,0.8)]
              animate-pulse
              text-center
            "
          >
            VIRASAT
          </motion.h1>

          {/* Typewriter Paragraph */}
          <motion.div
            className="text-xl md:text-2xl mt-4 text-gray-200 drop-shadow-sm"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {"Where India's Heritage Comes Alive".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 max-w-xl mx-auto text-gray-400 drop-shadow-sm"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
            }}
          >
            {"Experience history, art, and tradition like never before—interactive, immersive, and timeless."
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.div>

          {/* Explore Button */}
          <Link to="/states">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0px 0px 20px rgba(255, 193, 7, 0.8), 0px 0px 40px rgba(255, 193, 7, 0.4)",
                transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
              }}
              whileTap={{ scale: 0.95 }}
              className="
    mt-12 px-10 py-4 rounded-full font-bold text-white
    bg-black/80 backdrop-blur-md
    border border-amber-400
    shadow-lg shadow-amber-500/40
    transition-all duration-200 ease-in-out
    font-serif text-xl
  "
            >
              Explore Now!
            </motion.button>
          </Link>
        </section>

        {/* Monuments Section */}
        <motion.section
  id="monuments"
  className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white px-6 py-24"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollFadeIn}
>
  {/* Heading */}
  <motion.h2
    className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500 drop-shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    Monuments of India
  </motion.h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
    {[
      {
        name: "Taj Mahal",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        desc: "The Taj Mahal, an iconic symbol of love, stands gracefully on the banks of the Yamuna River in Agra. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this marble marvel showcases intricate carvings, symmetrical gardens, and a breathtaking dome. It is not only an architectural masterpiece but also a testament to India’s rich Mughal heritage.",
      },
      {
        name: "Qutub Minar",
        img: "https://imgs.search.brave.com/kPTxvWvUyY0dq1h91Vsjeed868R7skbCOP0oH-4-wGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MTA0NDE5L3Bob3Rv/L3F1dHViLW1pbmFy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UZWtheWdVSHRX/SUVGOGFXa0V1dVUz/UUNpb0FvUjAxaWxG/aTNqeE04ODM4PQ",
        desc: "Standing tall in Delhi, the Qutub Minar is a towering example of Indo-Islamic architecture. Constructed in 1193, this five-story red sandstone minaret is adorned with intricate carvings and inscriptions from the Quran. A UNESCO World Heritage Site, it represents the advent of Islamic rule in India.",
      },
      {
        name: "Red Fort",
        img: "https://imgs.search.brave.com/1L2uJX-E4WOjnyUVRISAPnysyXmoYfZNriJHKocNcvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/OTk4NzUwNy9waG90/by9yZWQtZm9ydC1k/ZWxoaS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Zm8xdld2/T0NaOFJUWVBmVXB3/aWNrd1IyMFM0blhN/OVhfNFhTR1RCbDVL/cz0",
        desc: "Delhi’s Red Fort, or Lal Qila, served as the main residence of the Mughal emperors for nearly 200 years. Its massive red sandstone walls, ornate gates, and expansive courtyards reflect the grandeur of Mughal architecture. Every year, it hosts India’s Independence Day celebrations, making it historically and culturally significant.",
      },
      {
        name: "India Gate",
        img: "https://imgs.search.brave.com/IFfod1O1RhXYx846iuXCJhZqZhcQAQSUSGwrI_NkHtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzJj/L2U4LzFlMmNlOGVm/YjMzOWEwMDA1OTFh/MGQwMTE0YmYzYzA0/LmpwZw",
        desc: "India Gate, located in New Delhi, is a war memorial built to honor the soldiers of the British Indian Army who died during World War I. Designed by Sir Edwin Lutyens, this towering arch stands amidst lush lawns and fountains, beautifully illuminated at night.",
      },
    ].map((monument, idx) => (
      <motion.div
        key={idx}
        className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transition-transform duration-200"
        whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(255, 193, 7, 0.7)" }}
      >
        <img
          src={monument.img}
          alt={monument.name}
          className="w-full h-72 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md text-gray-200 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex flex-col justify-end">
          <h3 className="text-2xl font-semibold text-amber-400 mb-2">{monument.name}</h3>
          <p className="text-sm">{monument.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* See All Monuments Button */}
  <a href="/monuments" className="mt-16">
    <motion.button
      whileHover={{
                scale: 1.1,
                boxShadow:
                  "0px 0px 20px rgba(255, 193, 7, 0.8), 0px 0px 40px rgba(255, 193, 7, 0.4)",
                transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
              }}
              whileTap={{ scale: 0.95 }}
              className="
    mt-12 px-10 py-4 rounded-full font-bold text-white
    bg-black/80 backdrop-blur-md
    border border-amber-400
    shadow-lg shadow-amber-500/40
    transition-all duration-200 ease-in-out
    font-serif text-xl"
    >
      See All Monuments
    </motion.button>
  </a>
</motion.section>


        <motion.section
  id="stories"
  className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] text-white px-6 py-20"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollFadeIn}
>
  {/* Heading */}
  <motion.h2
    className="text-xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 drop-shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    Heritage Stories
  </motion.h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
    {[
      {
        title: "The Glory of Taj Mahal",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        desc: "A monument of eternal love, the Taj Mahal stands as a masterpiece of Mughal architecture. Every marble carving tells a story of devotion, artistry, and grandeur that has captivated visitors for centuries.",
      },
      {
        title: "Qutub Minar: Towering History",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Qutub_Minar.jpg",
        desc: "The Qutub Minar, a 73-meter high marvel, showcases the fusion of Islamic design and Indian craftsmanship. Its intricate inscriptions narrate the history of Delhi's medieval era.",
      },
      {
        title: "Red Fort Chronicles",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Red_Fort_in_New_Delhi_03-2016_img3.jpg",
        desc: "Lal Qila, or the Red Fort, resonates with tales of Mughal emperors, political intrigue, and grand celebrations. Its walls echo centuries of history preserved in stone and courtyard gardens.",
      },
      {
        title: "India Gate: Remembrance & Pride",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/India_Gate_in_New_Delhi_03-2016_img1.jpg",
        desc: "India Gate is more than an architectural marvel; it is a testament to the bravery of soldiers. The surrounding lawns and illuminated archway narrate stories of valor and national pride.",
      },
      {
        title: "Ajanta Caves: Art in Stone",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Ajanta_Caves_Painting.jpg",
        desc: "Hidden in the hills of Maharashtra, Ajanta Caves preserve Buddhist art spanning centuries. Every fresco and sculpture reveals cultural, religious, and artistic traditions of ancient India.",
      },
      {
        title: "Konark Sun Temple: Dance of Light",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Konark_Sun_Temple_1.jpg",
        desc: "The Konark Sun Temple, designed like a colossal chariot, celebrates the sun god through intricate carvings and moving shadows, narrating celestial tales frozen in stone.",
      },
      {
        title: "Hampi Ruins: Ancient Capital",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vittala_Temple_Stone_Carvings.jpg",
        desc: "Hampi, the erstwhile Vijayanagara Empire capital, is dotted with grand temples and monuments. Its ruins tell stories of prosperity, culture, and devotion of a bygone era.",
      },
      {
        title: "Khajuraho Temples: Erotic Sculptures",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Khajuraho_Temple_Sculptures.jpg",
        desc: "The Khajuraho group of temples in Madhya Pradesh are celebrated for their intricate carvings and erotic sculptures, reflecting the artistic freedom and cultural richness of medieval India.",
      },
    ].map((story, idx) => (
      <motion.div
        key={idx}
        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 group shadow-lg hover:shadow-amber-400/50"
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={story.img}
          alt={story.title}
          className="w-full h-72 md:h-80 lg:h-72 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md text-gray-200 p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
          <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">{story.title}</h3>
          <p className="text-sm md:text-base">{story.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* See All Stories Button */}
  <a href="/stories" className="mt-16">
    <motion.button
      className="px-10 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/50"
      whileHover={{ scale: 1.05 }}
    >
      See All Stories
    </motion.button>
  </a>
</motion.section>

        {/* Dance Section */}
        <motion.section
          id="dance"
          className="min-h-screen flex items-center justify-center bg-[#222] text-white px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollFadeIn}
        >
          <motion.h2
            className="text-5xl font-bold text-amber-300 drop-shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Classical Dance Forms
          </motion.h2>
        </motion.section>

        <FeaturedTraditions />
      </div>
    </>
  );
};

export default LandingPage;
