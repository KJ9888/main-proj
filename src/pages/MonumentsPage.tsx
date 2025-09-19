import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const MonumentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Monuments of India</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" alt="Taj Mahal" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Taj Mahal</h3>
              <p className="text-gray-600 mt-2">Agra's white marble monument built by Shah Jahan.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Qutub_Minar.jpg" alt="Qutub Minar" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Qutub Minar</h3>
              <p className="text-gray-600 mt-2">A UNESCO site in Delhi — tall brick minaret.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Hawa_Mahal_2011.jpg" alt="Hawa Mahal" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Hawa Mahal</h3>
              <p className="text-gray-600 mt-2">Jaipur’s palace of winds with many jharokhas.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MonumentsPage;
