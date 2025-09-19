import React from "react";
import { motion } from "framer-motion";

type Product = { id: string; title: string; price: number; img?: string };

type Props = {
  products: Product[];
  onClose: () => void;
};

const ProductModal: React.FC<Props> = ({ products, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Buy items</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.id} className="flex items-center space-x-4 p-3 border rounded">
              {p.img ? <img src={p.img} alt={p.title} className="w-20 h-20 object-cover rounded" /> : <div className="w-20 h-20 bg-gray-200 rounded" />}
              <div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">₹{p.price}</p>
                <button className="mt-2 px-3 py-1 bg-amber-400 rounded text-white">Buy now</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
