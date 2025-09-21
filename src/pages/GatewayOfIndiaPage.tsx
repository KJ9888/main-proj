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


const GatewayOfIndiaPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            Gateway of India <span className="text-teal-400">(Mumbai's Iconic Arch)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              Standing majestically overlooking the Arabian Sea, the Gateway of India is one of Mumbai's most recognizable landmarks. This colossal arch monument was built during the 20th century to commemorate the landing of King-Emperor George V and Queen-Empress Mary at Apollo Bunder during their 1911 visit to India.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1594980646067-270881954ed6?q=80&w=2070&auto=format&fit=crop"
            altText="The majestic Gateway of India in Mumbai"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Symbol of Farewell</h2>
            <p className="text-xl leading-relaxed">
              While initially built as a grand ceremonial entrance, the Gateway of India ironically became a symbol of departure. It was through this very arch that the last British troops marched out of India in 1948, marking the end of British rule. It has since become a popular gathering spot and a starting point for various boat tours.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1627883216893-6b744d08129e?q=80&w=2070&auto=format&fit=crop"
            altText="View of the Gateway of India from the sea, with boats around"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Architectural Blend</h2>
            <p className="text-xl leading-relaxed">
              The monument is a fine example of Indo-Saracenic architecture, incorporating elements from 16th-century Gujarati architecture. It is built from yellow basalt and reinforced concrete. The arch is 26 metres (85 feet) high and is adorned with intricate carvings. The design was conceived by architect George Wittet.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1628108420790-a2924fb70584?q=80&w=1974&auto=format&fit=crop"
            altText="Close-up of the intricate details and carvings on the Gateway of India"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">Mumbai's Landmark</h2>
            <p className="text-xl leading-relaxed">
              Today, the Gateway of India remains a vibrant hub of activity, frequented by locals and tourists alike. It's a popular spot for photography, ferry rides to Elephanta Caves, and simply enjoying the sea breeze. The magnificent Taj Mahal Palace Hotel stands right opposite, adding to the grandeur of the surroundings.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1621255745862-231a47738f71?q=80&w=2070&auto=format&fit=crop"
            altText="Gateway of India at sunset with the Taj Mahal Palace Hotel in the background"
          />
        </section>

      </article>
    </main>
  );
};

export default GatewayOfIndiaPage;