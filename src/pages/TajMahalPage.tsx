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


const TajMahalPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            The Taj Mahal <span className="text-blue-300">(Crown of Palaces)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              An immense mausoleum of white marble, the Taj Mahal is undoubtedly the most beautiful monument built by the Mughals. Built in Agra between 1631 and 1648 by order of Emperor Shah Jahan in memory of his favourite wife, Mumtaz Mahal, it is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1548013144-030ec60717e8?q=80&w=1974&auto=format&fit=crop"
            altText="A beautiful front view of the Taj Mahal"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Timeless Love Story</h2>
            <p className="text-xl leading-relaxed">
              The Taj Mahal stands as a testament to eternal love. It was commissioned after Mumtaz Mahal, Shah Jahan's beloved wife, died during childbirth. Deeply heartbroken, the Emperor embarked on constructing a monument that would be an unparalleled symbol of his love. Its construction involved twenty thousand artisans, and it took over 22 years to complete.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1552504246-d2d0c242e272?q=80&w=1974&auto=format&fit=crop"
            altText="A close-up of the marble and intricate carvings of the Taj Mahal"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Architectural Masterpiece</h2>
            <p className="text-xl leading-relaxed">
              The architecture of the Taj Mahal is a harmonious blend of Persian, Islamic, and Indian styles. The main structure is a massive white marble dome, flanked by four minarets. The intricate marble inlay work, featuring precious and semi-precious stones, tells tales of Mughal artistry and craftsmanship.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1571439975344-f89a80396bc7?q=80&w=1974&auto=format&fit=crop"
            altText="The intricate inlay work on the marble walls of the Taj Mahal"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Taj Today</h2>
            <p className="text-xl leading-relaxed">
              Recognized as a UNESCO World Heritage Site, the Taj Mahal attracts millions of visitors annually. It remains a powerful symbol of India and an icon of architectural beauty. Whether bathed in the glow of sunrise or silhouetted against the moonlight, its beauty continues to captivate hearts worldwide.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1588079717140-5b583f8d3483?q=80&w=2070&auto=format&fit=crop"
            altText="Taj Mahal reflecting in the water at sunrise"
          />
        </section>

      </article>
    </main>
  );
};

export default TajMahalPage;