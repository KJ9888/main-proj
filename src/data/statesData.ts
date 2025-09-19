// small dataset for states. Add more details/images as you like.
export type StateInfo = {
  id: string;
  name: string;
  heroImage: string;
  description: string;
  famousItems: { id: string; title: string; price: number; img: string }[];
};

const states: StateInfo[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mehrangarh_Fort_Jodhpur_Rajasthan.jpg",
    description: "Land of palaces, forts and deserts.",
    famousItems: [
      { id: "1", title: "Bandhani Saree", price: 1500, img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bandhani_Saree.jpg" },
      { id: "2", title: "Miniature Painting", price: 2500, img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mughal_painting.jpg" },
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Houseboat_in_Kerala.jpg",
    description: "God's Own Country — backwaters and green landscapes.",
    famousItems: [
      { id: "1", title: "Spices Pack", price: 400, img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Variety_of_spices_%283306563646%29.jpg" },
      { id: "2", title: "Kathakali Mask", price: 1200, img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kathakali_performance%2C_Muscat.jpg" },
    ],
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Taj-Mahal.jpg",
    description: "Home of the Taj, rich cultural history.",
    famousItems: [
      { id: "1", title: "Petha (Sweet)", price: 120, img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Petha_making.jpg" },
      { id: "2", title: "Brassware", price: 800, img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brassware%2C_India.jpg" },
    ],
  },
];

export default states;
