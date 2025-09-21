import React from 'react';

// This component displays a real image from a URL
const ImageDisplay = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover object-center"
    />
  </div>
);


const QutubMinarPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            The Qutub Minar <span className="text-green-500">(Tower of Victory)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              The Qutub Minar, a UNESCO World Heritage Site in Delhi, is a towering 73-meter-high minaret. Built by Qutb-ud-din Aibak in 1193, the tower was constructed to celebrate the victory of Mohammed Ghori over the Rajput king, Prithviraj Chauhan.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1524310322434-824e85923bfc?q=80&w=1974&auto=format&fit=crop"
            altText="The towering Qutub Minar against a blue sky"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Journey Through History</h2>
            <p className="text-xl leading-relaxed">
              The construction was started by Qutb-ud-din Aibak but was completed by his successor, Iltutmish. The minaret is surrounded by several other ancient and medieval structures, collectively known as the Qutub complex. It has survived damage from lightning and earthquakes over the centuries.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1601815181582-351052084535?q=80&w=1935&auto=format&fit=crop"
            altText="Intricate carvings and inscriptions on the Qutub Minar"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Architectural Grandeur</h2>
            <p className="text-xl leading-relaxed">
              A masterpiece of Indo-Islamic architecture, the tower has five distinct storeys, each marked by a projecting balcony. The first three storeys are made of red sandstone, while the fourth and fifth storeys are of marble and sandstone. Verses from the Quran are inscribed on its walls.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1557925473-048a1cd99086?q=80&w=2070&auto=format&fit=crop"
            altText="Architectural detail of the balconies of Qutub Minar"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Monument Today</h2>
            <p className="text-xl leading-relaxed">
              Today, the Qutub Minar is one of Delhi's most popular tourist attractions, drawing visitors from around the world. The surrounding complex, with its rich history and beautiful ruins, provides a serene escape from the bustling city.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1620021677320-b45b0a34b223?q=80&w=1932&auto=format&fit=crop"
            altText="Tourists exploring the Qutub complex"
          />
        </section>

      </article>
    </main>
  );
};

export default QutubMinarPage;