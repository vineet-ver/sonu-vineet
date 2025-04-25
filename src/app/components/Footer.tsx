import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // WhatsApp link with predefined message
  const whatsappLink = "https://wa.me/918882586447?text=Hello%20SSTRAVELS,%20I'm%20interested%20in%20booking%20a%20car%20for%20my%20wedding.";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 relative h-16 w-36">
              <Image 
                src="/images/carslogo.png" 
                alt="SSTRAVELS Logo" 
                width={150} 
                height={75} 
                className="object-contain"
              />
            </div>
            <p className="mb-4">Premium wedding car rental service offering elegant vehicles for your special day.</p>
            <div className="flex space-x-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-green-400 transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-red-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-red-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-red-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-red-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-red-400" />
                <span>+91 8882586447</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-red-400" />
                <span>shuklamrsk682@gmial.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-red-400" />
                <span>C/59A, block-C ashok vihar, phase iii extension, gurugram-122001</span>
              </li>
              <li className="mt-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  Contact via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SSTRAVELS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 