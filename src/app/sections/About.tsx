import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const benefits = [
    'Punctual service guarantees',
    'Professionally trained chauffeurs',
    'Immaculately maintained vehicles',
    'Elegant car decorations',
    'Comprehensive insurance coverage',
    '24/7 customer support'
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About WheelsWedding</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium wedding car rental service offering elegant vehicles for your special day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1549220167-afcce2a34d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Luxury Wedding Car Service in Gurugram
            </h3>
            <p className="text-gray-600 mb-6">
              WheelsWedding is a premium wedding car rental service offering elegant vehicles for your special day. 
              Our fleet includes luxury cars perfect for Indian weddings and special occasions, from vintage classics 
              to modern luxury sedans and SUVs.
            </p>
            <p className="text-gray-600 mb-6">
              We serve all major locations across Delhi NCR, including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad, 
              providing a seamless experience for your wedding transportation needs.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Why Choose Us
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 