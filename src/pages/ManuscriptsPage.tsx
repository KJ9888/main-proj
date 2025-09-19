import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ManuscriptsPage: React.FC = () => {
  const manuscripts = [
    { title: "Rigveda", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Rigveda_MS2097.jpg", desc: "One of the oldest sacred texts." },
    { title: "Upanishads", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Upanishads.jpg", desc: "Philosophical texts." },
    { title: "Mahabharata", img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mahabharata_text.jpg", desc: "Epic story of Kurukshetra." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Ancient Manuscripts</h1>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {manuscripts.map((m) => (
            <motion.div key={m.title} whileHover={{ scale: 1.03 }} className="min-w-[320px] bg-white rounded shadow p-4">
              <img src={m.img} alt={m.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-3">{m.title}</h3>
              <p className="text-gray-600 mt-1">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManuscriptsPage;
