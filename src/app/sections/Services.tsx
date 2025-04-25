import { FaCar, FaCarSide, FaUmbrellaBeach, FaUserTie } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Vintage Classics',
      description: 'Timeless elegance with our collection of Rolls Royce and Bentley classics perfect for making a grand entrance.',
      icon: <FaCarSide className="h-12 w-12 text-red-600" />,
      image: "https://images.unsplash.com/photo-1631140654020-988ef5b72e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: 'Modern Luxury',
      description: 'Sophisticated comfort with our premium Mercedes S-Class and BMW 7-Series fleet for a stylish wedding day.',
      icon: <FaCar className="h-12 w-12 text-red-600" />,
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 3,
      title: 'Decorated Floral Cars',
      description: 'Beautifully adorned vehicles with elegant floral decorations that complement your wedding theme.',
      icon: <FaUmbrellaBeach className="h-12 w-12 text-red-600" />,
      image: "https://images.unsplash.com/photo-1513103789115-b1af9580113c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 4,
      title: 'Premium SUVs',
      description: 'Spacious and comfortable SUVs for family transport, ensuring everyone arrives in style and comfort.',
      icon: <FaUserTie className="h-12 w-12 text-red-600" />,
      image: "https://images.unsplash.com/photo-1605040844767-c9f9cfceb1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a diverse range of luxury vehicles for your wedding day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white rounded-full p-3 inline-block mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 