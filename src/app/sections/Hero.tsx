import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const whatsappLink = "https://wa.me/918882586447?text=Hello%20SSTRAVELS,%20I'm%20interested%20in%20booking%20a%20car%20for%20my%20wedding.";

  return (
    <div className="relative bg-gray-900 text-white min-h-[90vh] flex items-center">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1515816052601-210d5501d471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" 
        }}
      ></div>
      
      {/* Jellyfish-like overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 to-purple-900/30 mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Make Your <span className="text-red-500">Wedding Day</span> Unforgettable
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Luxury car services for your special moments. Arrive in style with our premium wedding cars.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors md:text-lg"
            >
              <FaWhatsapp className="mr-2" />
              Book Now on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors md:text-lg"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 