import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import states from "../data/statesData";
import ProductModal from "../components/ProductModal";
import { motion } from "framer-motion";
// FIX 1: Import the local image so you can use it below
import hawaMahalImage from "../assets/hawamahal.jpg";

const StateDetailPage: React.FC = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const state = states.find((s) => s.id === stateId);
  const [modalProducts, setModalProducts] = useState<any[] | null>(null);

  if (!state) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto py-24 px-6">
          <h2 className="text-2xl font-bold">State not found</h2>
        </main>
      </div>
    );
  }

  // FIX 2: I've replaced the old 'cards' array with a new data structure.
  // This provides unique, valid data for each category.
  const categoryData = {
    monuments: {
      key: "monuments",
      title: "Explore Monuments & Crafts",
      img: state.heroImage,
      items: state.famousItems, // Uses the original items from your data file
    },
    food: {
      key: "food",
      title: "Taste Local Delicacies",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Indian_thali.jpg", // Valid placeholder URL
      items: [ // Example unique items
        { id: "food1", title: `${state.name} Thali`, price: 600, img: "https://upload.wikimedia.org/wikipedia/commons/1/13/Dal_Bati_Churma.jpg" },
        { id: "food2", title: "Local Sweet", price: 450, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Ghevar_sweet.jpg" },
      ],
    },
    trip: {
      key: "trip",
      title: "Plan Your Trip",
      img: hawaMahalImage, // Use the imported local image
      items: [ // Example unique items
        { id: "trip1", title: "City Tour Package", price: 3000, img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hawa_Mahal_2011.jpg" },
        { id: "trip2", title: "Guided Fort Visit", price: 1500, img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mehrangarh_Fort_Jodhpur_Rajasthan.jpg" },
      ],
    },
    history: {
      key: "history",
      title: "Discover the History",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Chittorgarh_Fort_PRO_-_Shubham_Goyal_-_Chittorgarh_Fort_full_view_from_a_distance.jpg", // Valid placeholder URL
      items: [ // Example unique items
        { id: "hist1", title: `History of ${state.name} Book`, price: 800, img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/A_History_of_Rajasthan_by_Rima_Hooja.jpg" },
      ],
    },
  };

  const cards = Object.values(categoryData);


  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <div className="flex items-center gap-6 mb-8">
          <img src={state.heroImage} alt={state.name} className="w-28 h-20 object-cover rounded" />
          <div>
            <h1 className="text-3xl font-bold">{state.name}</h1>
            <p className="text-gray-600">{state.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <motion.div key={c.key} whileHover={{ scale: 1.02 }} className="rounded-lg shadow overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="text-gray-600 mt-2">Explore {state.name} — view and buy related items.</p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {c.items.map((it) => (
                    <div key={it.id} className="flex items-center justify-between p-3 rounded border">
                      <div className="flex items-center gap-3">
                        <img src={it.img} alt={it.title} className="w-16 h-12 object-cover rounded" />
                        <div>
                          <div className="font-semibold">{it.title}</div>
                          <div className="text-sm text-gray-600">₹{it.price}</div>
                        </div>
                      </div>
                      <button onClick={() => setModalProducts([it])} className="px-3 py-1 bg-amber-400 text-white rounded">
                        Buy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />

      {modalProducts && <ProductModal products={modalProducts} onClose={() => setModalProducts(null)} />}
    </div>
  );
};

export default StateDetailPage;