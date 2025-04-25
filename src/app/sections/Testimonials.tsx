import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rohit & Priya',
      quote: 'The vintage Rolls Royce made our wedding entrance truly magical. The chauffeur was professional and the car was immaculately maintained. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      name: 'Amit & Neha',
      quote: 'Excellent service and beautiful cars. The chauffeur was professional and courteous. The decorated Mercedes added the perfect touch of luxury to our day.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 3,
      name: 'Vikram & Meera',
      quote: 'Perfect addition to our wedding day. The decorated car looked stunning in our photos and videos. The team was punctual and the service was flawless.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What our happy couples say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center">
                    {renderRating(testimonial.rating)}
                  </div>
                  <h3 className="text-xl font-semibold mt-1">{testimonial.name}</h3>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-red-600 mb-3">
                  <FaQuoteLeft size={24} />
                </div>
                <p className="text-gray-600 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 