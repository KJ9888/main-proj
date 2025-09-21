import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const statesData = [
  {
    id: "punjab",
    name: "Punjab",
    description:
      "Known as the land of five rivers, Punjab is famous for its vibrant culture, Bhangra dance, fertile fields, and the Golden Temple.",
    imageUrl: "https://static.toiimg.com/photo/108178837.cms",
    path: "/states/punjab",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    description:
      "Maharashtra is home to Mumbai, Ajanta-Ellora caves, and diverse landscapes ranging from beaches to hill stations.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=1200&h=-1&s=1",
    path: "/states/maharashtra",
  },
  {
    id: "sikkim",
    name: "Sikkim",
    description:
      "Nestled in the Himalayas, Sikkim is known for its monasteries, breathtaking landscapes, Kanchenjunga peak, and Buddhist culture.",
    imageUrl:
      "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/10/Things-to-do-in-Lachung.png",
    path: "/states/sikkim",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description:
      "Tamil Nadu boasts Dravidian temples, Bharatanatyam dance, Carnatic music, and scenic spots like Ooty and Kanyakumari.",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-720x480/15/3b/8c/de.jpg",
    path: "/states/tamil-nadu",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description:
      "The land of high passes, Ladakh is known for its monasteries, Pangong Lake, Nubra Valley, and unique Himalayan culture.",
    imageUrl: "https://wanderon-images.gumlet.io/blogs/new/2023/12/leh-ladakh.jpg",
    path: "/union-territories/ladakh",
  },
  {
    id: "delhi",
    name: "Delhi",
    description:
      "India’s capital, Delhi, blends Mughal heritage, colonial architecture, bustling markets, and modern governance.",
    imageUrl:
      "https://img.freepik.com/photos-gratuite/scene-batiments-ville-indienne_23-2151823080.jpg?semt=ais_incoming&w=740&q=80",
    path: "/union-territories/delhi",
  },
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    description:
      "Known for pristine beaches, coral reefs, tropical forests, and the historic Cellular Jail in Port Blair.",
    imageUrl:
      "https://indiadekha.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-25-19.06.52-A-scenic-view-of-Port-Blair-the-capital-of-Andaman-and-Nicobar-Islands.-The-image-features-a-beautiful-coastline-with-turquoise-waters-a-bustling-ha-1024x585.webp",
    path: "/union-territories/andaman-nicobar",
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    description:
      "A group of exotic islands in the Arabian Sea, famous for lagoons, marine biodiversity, and water sports.",
    imageUrl: "https://etimg.etb2bimg.com/photo/109819916.cms",
    path: "/union-territories/lakshadweep",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const StatesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="min-h-screen bg-[#111] text-white">
      <Header />
      <main className="container mx-auto py-24 px-6">
        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          States & Union Territories of India
        </motion.h1>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {statesData.map((state) => (
            <motion.div
              key={state.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 25px rgba(255,193,7,0.4)",
              }}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg flex flex-col"
              onClick={() => navigate(state.path)} // ✅ navigate in same tab
            >
              {/* Image */}
              <motion.img
                src={state.imageUrl}
                alt={state.name}
                className="w-full h-64 object-cover"
              />
              {/* Content */}
              <div className="p-6 bg-gray-900 bg-opacity-70 flex-1 flex flex-col justify-start">
                <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-2 rounded"></div>
                <h3 className="text-2xl font-bold">{state.name}</h3>
                <p className="text-gray-300 mt-2">{state.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default StatesPage;
