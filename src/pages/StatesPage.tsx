import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import states from "../data/statesData";
import { motion } from "framer-motion";

const StatesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Explore States</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {states.map((s) => (
            <motion.div key={s.id} whileHover={{ scale: 1.02 }} className="rounded shadow ">
              <img src={s.heroImage} alt={s.name} className="w-full h-100 object-cover" />
              <div className="p-6">
                <h2 className="text-3xl font-semibold ">{s.name}</h2>
                <p className="text-gray-900 mt-2">{s.description}</p>
                <Link to={`/states/${s.id}`} className="inline-block mt-4 px-4 py-2 bg-amber-400 text-white rounded">
                  Explore {s.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatesPage;
