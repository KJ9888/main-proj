import React from "react";
import { motion } from "framer-motion";

type Tradition = {
  title: string;
  description: string;
  imageUrl: string;
};

const traditions: Tradition[] = [
  {
    title: "Kathakali",
    description: "Kerala ka ek vibrant aur dramatic classical dance form.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kathakali_performance%2C_Muscat.jpg",
  },
  {
    title: "Warli Painting",
    description: "Maharashtra ke tribal art, jo simple geometric shapes ka istemal karta hai.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Warli_Painting.jpg",
  },
  {
    title: "Hawa Mahal",
    description: "Jaipur ka 'Palace of Winds', jisme 953 jharokhas (windows) hain.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hawa_Mahal_2011.jpg",
  },
];

const FeaturedTraditions: React.FC = () => (
  <section id="culture" className="w-full bg-[#0c0a09] py-20 px-4">
    <div className="container mx-auto text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif font-bold text-amber-300 mb-12">
        Hamari Virasat Janiye
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {traditions.map((t, i) => (
          <motion.div key={t.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-stone-900/50 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src={t.imageUrl} alt={t.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold font-serif text-white mb-2">{t.title}</h3>
              <p className="text-gray-400 mb-4">{t.description}</p>
              <a href="#" className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">Aur Jane →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedTraditions;
