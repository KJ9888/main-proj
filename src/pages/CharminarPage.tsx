
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


const CharminarPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            Charminar <span className="text-lime-400">(The Four Minarets)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              An iconic symbol of Hyderabad, the Charminar is a magnificent monument and mosque. Its name, which translates to "Four Minarets," refers to the four ornate minarets that grace its structure. It stands at the heart of the city, an architectural gem that has captivated visitors for centuries.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1570168135687-0b15f1a6f5e3?q=80&w=2070&auto=format&fit=crop"
            altText="The grand Charminar monument in Hyderabad"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Monument of Gratitude</h2>
            <p className="text-xl leading-relaxed">
              Built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the Charminar was constructed to commemorate the eradication of a deadly plague from the city. Legend has it that he prayed for the end of the plague at the very spot where the monument now stands.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1623326112942-5a215a513a0c?q=80&w=1969&auto=format&fit=crop"
            altText="A historical view of Charminar amidst the city"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Indo-Islamic Design</h2>
            <p className="text-xl leading-relaxed">
              The Charminar is a brilliant example of Indo-Islamic architecture with Persian influences. The square structure has four grand arches that face four cardinal directions. At each corner stands an exquisitely shaped minaret, 56 meters high, with a double balcony. It is constructed from granite and lime mortar.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1601237409244-a035e640b91e?q=80&w=1974&auto=format&fit=crop"
            altText="A close-up showing the intricate details of a minaret"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Heart of Hyderabad</h2>
            <p className="text-xl leading-relaxed">
              Today, the Charminar is synonymous with the culture of Hyderabad. It is surrounded by bustling markets like the Laad Bazaar, famous for its bangles. The upper floor contains a mosque, and the entire structure is beautifully illuminated at night, making it a spectacular sight.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.unsplash.com/photo-1625816913799-2c76f4e1505c?q=80&w=1974&auto=format&fit=crop"
            altText="Charminar illuminated at night with city lights"
          />
        </section>

      </article>
    </main>
  );
};

export default CharminarPage;