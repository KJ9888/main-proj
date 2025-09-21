import React from 'react';

// Define the types for the props
interface ImageDisplayProps {
  imageUrl: string; 
  altText: string;
}

// Reusable component for displaying an image
const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
  </div>
);

// Main component for the page
const AshokaPage: React.FC = () => {
  return (
    <main className="bg-white font-sans text-gray-800 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-red-700 font-semibold mb-2">TRANSFORMATION OF AN EMPEROR</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-gray-900">
            Ashoka: <span className="text-red-800">The Emperor Who Waged War on War Itself</span>
          </h1>
        </header>

        {/* Section 1 */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">Chandashoka: The Fierce Conqueror</h2>
            <p className="text-lg leading-relaxed">
              Before he was known as 'Ashoka the Great', he was 'Chandashoka'—Ashoka the Fierce...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/ashoka-warrior.jpg"
            altText="An artistic depiction of Emperor Ashoka as a fierce warrior"
          />
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">The Horrors of Kalinga</h2>
            <p className="text-lg leading-relaxed">
              The one kingdom that stood in his way was Kalinga. In 261 BCE, Ashoka launched a massive invasion...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/kalinga-war.jpg"
            altText="A somber artistic depiction of the battlefield after the Kalinga War"
          />
        </section>
        
        {/* Section 3 */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">From Conquest to Compassion</h2>
            <p className="text-lg leading-relaxed">
              That moment on the battlefield of Kalinga changed everything...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/ashoka-pillar.jpg"
            altText="A historical image or replica of an Ashoka Pillar"
          />
        </section>

        {/* Section 4 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">An Enduring Legacy</h2>
            <p className="text-lg leading-relaxed">
              Ashoka had his teachings and edicts carved onto great stone pillars and rocks...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/ashoka-chakra.png"
            altText="A clear depiction of the Ashoka Chakra"
          />
        </section>
      </article>
    </main>
  );
};
export default AshokaPage;