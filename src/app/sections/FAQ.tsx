'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 3 months before your wedding date, especially during peak wedding season (October to February). For popular dates and premium vehicles, booking 4-6 months in advance is advisable.'
    },
    {
      id: 2,
      question: 'Do you provide drivers?',
      answer: 'Yes, all our packages include professional chauffeurs who are well-trained, punctual, and dressed in formal attire. Our chauffeurs are experienced in wedding protocols and will ensure a smooth experience.'
    },
    {
      id: 3,
      question: 'Can we decorate the cars ourselves?',
      answer: 'We provide professional decoration services included in our packages. However, if you have specific decoration requirements, we can discuss custom arrangements. For preservation of our vehicles, we request that any additional decorations be discussed with our team beforehand.'
    },
    {
      id: 4,
      question: 'What happens if the car breaks down?',
      answer: 'We maintain our vehicles to the highest standards, so breakdowns are extremely rare. However, we always have backup vehicles on standby and provide immediate replacements in case of any unforeseen circumstances. Your wedding transportation is our priority.'
    },
    {
      id: 5,
      question: 'What areas do you serve?',
      answer: 'We serve all major locations across Delhi NCR, including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. For locations outside this area, additional charges may apply.'
    },
    {
      id: 6,
      question: 'What is your cancellation policy?',
      answer: 'Bookings cancelled more than 30 days before the event receive a 70% refund. Cancellations between 15-30 days receive a 50% refund. Unfortunately, cancellations less than 15 days before the event are non-refundable due to the premium nature of our service and scheduling.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our wedding car services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className="text-red-600">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 