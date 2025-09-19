import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedTraditions from "../components/FeaturedTraditions";

const CulturePage: React.FC = () => (
  <div className="min-h-screen bg-white text-gray-800">
    <Header />
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Culture</h1>
      {/* reuse FeaturedTraditions but wrapped in white bg for contrast */}
      <div className="bg-white">
        <FeaturedTraditions />
      </div>
    </main>
    <Footer />
  </div>
);

export default CulturePage;
