import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const whatsappLink = "https://wa.me/918882586447?text=Hello%20SSTRAVELS,%20I'm%20interested%20in%20booking%20a%20car%20for%20my%20wedding.";
  
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone className="text-red-600" size={24} />,
      title: 'Phone',
      detail: '+91 8882586447',
      link: 'tel:+918882586447'
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-red-600" size={24} />,
      title: 'Email',
      detail: 'shuklamrsk682@gmial.com',
      link: 'mailto:shuklamrsk682@gmial.com'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-red-600" size={24} />,
      title: 'Address',
      detail: 'C/59A, block-C ashok vihar, phase iii extension, gurugram-122001',
      link: 'https://maps.google.com/?q=C/59A,+block-C+ashok+vihar,+phase+iii+extension,+gurugram-122001'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get in touch to book your luxury wedding car service
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-red-400">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact via WhatsApp</h3>
                <p className="text-gray-300 mb-4">
                  For quick responses and booking inquiries, contact us directly on WhatsApp.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  <FaWhatsapp className="mr-2" size={20} />
                  Contact on WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.981560394164!2d77.02768117504704!3d28.476770675773283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c9641c8ead%3A0x2a01644c7bcc3bb2!2sAshok%20Vihar%2C%20Phase%20III%20Extn%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1719161566788!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WheelsWedding Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 