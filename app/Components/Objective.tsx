import Image from 'next/image';
import React from 'react';

const Objective = () => {
  return (
    <div className="mt-12 mb-4 flex flex-col md:flex-row items-stretch mx-4 sm:mx-8 md:mx-16 lg:mx-64 overflow-hidden">
      {/* Text Section */}
      <div className="bg-orange-500 text-center p-6 md:p-10 flex-1">
        <p className="font-bold text-lg md:text-2xl text-white pb-4">
          We are available 24/7 for all your business, personal, and special occasions.
        </p>
        <p className="text-sm md:text-lg text-white">
          Do not let TRAGEDY happen. Hire our security guards today. Our operators
        </p>
        <p className="text-sm md:text-lg text-white">
          are always available to help you protect your valuables.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full">
        <Image
          src="/many-bouncers.jpeg"
          alt="many-bouncers"
          width={300}
          height={400}
          className="w-full h-auto max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Objective;
