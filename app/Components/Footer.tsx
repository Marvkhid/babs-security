import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="text-center mb-10">
      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <Image
          src="/babslogo.png"
          alt="Logo"
          width={250}
          height={40}
          className="mt-10"
        />
      </div>

      {/* Main Title */}
      <h2 className="text-center text-3xl mt-8 text-black">
        Find <a href="#icon"> <span className="text-orange-500">Us</span></a>
      </h2>

      {/* Social Media Icons */}
      <div className="flex gap-3 justify-center">
        {/* Facebook */}
        <div className="p-2 rounded-full bg-orange-50 hover:bg-orange-800 transition-all duration-300">
          <Image
            src="/fb-icon.jpeg"
            alt="fb-icon"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Twitter */}
        <div className="p-2 rounded-full bg-orange-50 hover:bg-orange-800 transition-all duration-300">
          <Image
            src="/x-icon.png"
            alt="x-icon"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Instagram */}
        <div className="p-2 rounded-full bg-orange-50 hover:bg-orange-800 transition-all duration-300">
          <Image
            src="/instagram-icon.jpeg"
            alt="instagram-icon"
            width={90}
            height={90}
            className="rounded-full w-full"
          />
        </div>

        {/* LinkedIn */}
        <div className="p-2 rounded-full bg-orange-50 hover:bg-orange-800 transition-all duration-300">
          <Image
            src="/linkedIn-icon.png"
            alt="linkedIn-icon"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
