// src/pages/SambhajiMaharajPage.tsx

import React from 'react';

// Reusable component for displaying an image
interface ImageDisplayProps {
  imageUrl: string; 
  altText: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
  </div>
);

const SambhajiMaharajPage: React.FC = () => {
  return (
    <main className="bg-white font-sans text-gray-800 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-red-700 font-semibold mb-2">A DHARMAVEER'S LEGACY</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-gray-900">
            The King's Final Stand: <span className="text-red-800">Defiance of Sambhaji Maharaj</span>
          </h1>
        </header>

        {/* -- Section 1: The Capture -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">The Capture</h2>
            <p className="text-lg leading-relaxed">
              In February 1689, the course of Maratha history was forever altered. Chhatrapati Sambhaji Maharaj, through an act of betrayal, was captured by Mughal forces at Sangameshwar. He was brought in chains to the camp of Emperor Aurangzeb, the man who had spent nearly a decade trying, and failing, to conquer his kingdom.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/9c/Sambhaji_Maharaj_portrait.jpg"
            altText="A portrait of Chhatrapati Sambhaji Maharaj"
          />
        </section>

        {/* -- Section 2: The Emperor's Offer -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">The Emperor's Offer</h2>
            <p className="text-lg leading-relaxed mb-4">
              Brought before the mighty emperor, Sambhaji Maharaj was not a broken man. He stood with the pride of a king, his eyes reflecting an unbroken spirit. Aurangzeb made him an offer, believing he could finally break the Maratha will. The terms were clear:
            </p>
            <ul className="text-lg leading-relaxed list-disc list-inside text-right space-y-2">
                <li>Surrender all your forts.</li>
                <li>Reveal the location of your hidden treasures.</li>
                <li>Renounce your Hindu faith and convert to Islam.</li>
            </ul>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/21/Mughal_court.jpg"
            altText="An illustration of the opulent Mughal court of Emperor Aurangzeb"
          />
        </section>
        
        {/* -- Section 3: The Defiance -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">Absolute Defiance</h2>
            <p className="text-lg leading-relaxed">
              To a lesser man, this would have been a lifeline. For Sambhaji Maharaj, it was an insult. He looked at the emperor and scornfully rejected the offer. Legends say his reply was filled with such fearless contempt that it stunned the entire Mughal court. He made it clear that he would choose a thousand deaths over a life of dishonor and abandoning his Dharma. He declared that the Maratha spirit of freedom was not for sale.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/f0/Maratha_fort.jpg"
            altText="A strong Maratha hill fort, symbolizing resistance and Swarajya"
          />
        </section>

        {/* -- Section 4: The Legacy -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">The Dharmaveer's Sacrifice</h2>
            <p className="text-lg leading-relaxed">
              Enraged by this absolute defiance, Aurangzeb ordered a brutal execution. Yet, through unimaginable pain, Sambhaji Maharaj never relented. His refusal to bow down, even in the face of certain death, was his final act of resistance. His sacrifice did not crush the Marathas; it ignited a fire of vengeance and unity that ultimately consumed Mughal ambitions. This single, powerful act is why he is remembered as Dharmaveer—the valiant protector of righteousness.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/e0/Maratha_flag_Bhagwa_Dhwaj.jpg"
            altText="The saffron Maratha flag (Bhagwa Dhwaj) flying proudly"
          />
        </section>

      </article>
    </main>
  );
};

export default SambhajiMaharajPage;
