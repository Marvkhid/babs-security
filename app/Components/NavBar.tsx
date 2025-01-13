'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-orange-600 text-black px-8 py-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center space-x-3">
          <Image
            src="/babs-logo.png"
            alt="Logo"
            width={200}
            height={150}
            className="rounded"
          />
        </div>

       
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:text-gray-500 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-gray-500 transition duration-200">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-500 transition duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-gray-500 transition duration-200">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#contact-us" className="hover:text-gray-500 transition duration-200">
              Contact Us
            </a>
          </li>
        </ul>

        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-500 transition duration-200 text-2xl"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-black text-orange-500 mt-4 px-6 py-4 rounded shadow-lg">
          <ul className="space-y-4 text-xl">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-gray-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                onClick={closeMenu}
                className="hover:text-gray-400 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="hover:text-gray-400 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="hover:text-gray-400 transition duration-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                onClick={closeMenu}
                className="hover:text-gray-400 transition duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
