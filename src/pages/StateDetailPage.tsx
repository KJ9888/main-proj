import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import states from "../data/statesData";
import ProductModal from "../components/ProductModal";
import { motion } from "framer-motion";

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

  const cards = [
    {
      key: "monuments",
      title: "Want to know about monuments",
      img: state.heroImage,
      items: state.famousItems,
    },
    {
      key: "food",
      title: "Want to know about food",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Indian_food.jpg",
      items: state.famousItems,
    },
    {
      key: "trip",
      title: "Want to have a trip there",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Houseboat_in_Kerala.jpg",
      items: state.famousItems,
    },
    {
      key: "history",
      title: "Want to know about history",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Indian_history.jpg",
      items: state.famousItems,
    },
  ];

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
                <p className="text-gray-600 mt-2">Explore {state.name} — click to view & buy famous items.</p>

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
