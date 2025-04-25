import { FaCheck } from 'react-icons/fa';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Silver Package',
      description: '4-hour basic service with one luxury car',
      price: '₹15,000',
      features: [
        'One luxury car (Mercedes / BMW)',
        'Professional chauffeur',
        'Basic car decoration',
        '4 hours of service',
        'Pickup and drop-off in Delhi NCR',
        'Standard photography options'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Gold Package',
      description: '6-hour service with two luxury cars and decorated florals',
      price: '₹35,000',
      features: [
        'Two luxury cars (your choice)',
        'Professional chauffeurs',
        'Premium floral decoration',
        '6 hours of service',
        'Extended Delhi NCR coverage',
        'Premium photography backdrop',
        'Red carpet service'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Platinum Package',
      description: 'Full-day service with chauffeur, multiple vehicles, and premium decorations',
      price: '₹65,000',
      features: [
        'Three luxury cars (your choice)',
        'Elite chauffeurs in formal attire',
        'Elaborate custom decoration',
        'Full-day service (10 hours)',
        'All Delhi NCR locations covered',
        'Complimentary champagne',
        'Premium photography setup',
        'Dedicated coordinator'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Packages</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your wedding day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-lg overflow-hidden ${
                pkg.popular 
                  ? 'border-2 border-red-600 shadow-xl transform -translate-y-2' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <p className="text-4xl font-bold text-red-600 mb-6">{pkg.price}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://wa.me/918882586447?text=Hello%20SSTRAVELS,%20I'm%20interested%20in%20your%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-md transition-colors ${
                    pkg.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages; 