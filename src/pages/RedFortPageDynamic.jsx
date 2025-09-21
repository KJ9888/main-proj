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


const RedFortPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            The Red Fort <span className="text-red-500">(Lal Qila)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              Standing tall on the banks of the Yamuna River, the Red Fort, or Lal Qila, is a breathtaking monument of Mughal grandeur and a timeless symbol of India's sovereignty. Built in the 17th century by Emperor Shah Jahan, it was the seat of Mughal power for over 200 years and is now the very heart from which the story of modern India is told.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=2070&auto=format&fit=crop"
            altText="A majestic view of the Red Fort from the front"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Journey Through History</h2>
            <p className="text-xl leading-relaxed">
              Commissioned in 1638 when Shah Jahan moved his capital to Shahjahanabad, its walls have witnessed the zenith of Mughal artistry, the drama of royal succession, and the dawn of India's independence. It was from here that India's first Prime Minister, Jawaharlal Nehru, hoisted the national flag on August 15, 1947, a tradition that continues to this day.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1628799229132-024317a3465b?q=80&w=1932&auto=format&fit=crop"
            altText="Indian flag being hoisted at the Red Fort on Independence Day"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Architectural Grandeur</h2>
            <p className="text-xl leading-relaxed mb-6">
              The Red Fort is a brilliant fusion of Persian, Timurid, and Indian architectural styles. Inside its massive walls, a world of imperial elegance unfolds:
            </p>
            <ul className="space-y-3 text-lg text-left list-disc list-inside">
              <li><strong className="font-semibold text-amber-500">Diwan-i-Aam:</strong> Hall of Public Audience.</li>
              <li><strong className="font-semibold text-amber-500">Diwan-i-Khas:</strong> Hall of Private Audience, once home to the Peacock Throne.</li>
              <li><strong className="font-semibold text-amber-500">Rang Mahal:</strong> The vibrant "Palace of Colors".</li>
              <li><strong className="font-semibold text-amber-500">Moti Masjid:</strong> The pristine white marble "Pearl Mosque".</li>
            </ul>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1620421682528-6a5a85536b5c?q=80&w=1974&auto=format&fit=crop"
            altText="Intricate marble inlay work inside the Diwan-i-Khas"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Fort Today</h2>
            <p className="text-xl leading-relaxed">
              Every year on Independence Day, the Prime Minister of India addresses the nation from the ramparts of the Red Fort, reaffirming its status as a symbol of national pride. For visitors, a walk through its palaces, gardens, and museums is a walk through centuries of history. The evening light-and-sound show vividly narrates the fort's epic story.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1610422329252-0828dba658a2?q=80&w=2071&auto=format&fit=crop"
            altText="The Red Fort illuminated at night during a light and sound show"
          />
        </section>

      </article>
    </main>
  );
};

export default RedFortPage;