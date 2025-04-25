'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative h-12 w-36">
                <Image 
                  src="/images/carslogo.png" 
                  alt="SSTRAVELS Logo" 
                  width={100} 
                  height={20} 
                  className="object-contain brightness-150"
                  priority
                />
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#about" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              About
            </Link>
            <Link href="/#services" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              Services
            </Link>
            <Link href="/#packages" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              Packages
            </Link>
            <Link href="/#gallery" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              Gallery
            </Link>
            <Link href="/#testimonials" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="/#faq" className="px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300">
              FAQ
            </Link>
            <Link href="/#contact" 
              className="ml-4 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-red-400 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <Link href="/#about" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              About
            </Link>
            <Link href="/#services" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/#packages" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              Packages
            </Link>
            <Link href="/#gallery" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              Gallery
            </Link>
            <Link href="/#testimonials" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="/#faq" 
              className="block px-3 py-2 text-gray-200 hover:text-red-400 transition-colors duration-300"
              onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="/#contact" 
              className="block px-3 py-2 mt-2 text-center rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
              onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 