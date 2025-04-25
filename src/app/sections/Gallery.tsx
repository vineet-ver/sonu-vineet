'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Luxury vintage car for wedding"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Modern BMW wedding car"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1514867213082-326651a4a029?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Decorated car with flowers"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1627668657801-c49847ebda42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Wedding couple with luxury car"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Classic Rolls Royce for wedding"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      alt: "Wedding car decoration"
    }
  ];

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Gallery</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            View our stunning collection of wedding cars decorated for Indian ceremonies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openImage(image.src)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${image.src}')` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 