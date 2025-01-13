import Image from 'next/image';
import React from 'react';

const Duties = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch px-4 md:px-10 xl:px-20 max-w-screen-2xl mx-auto mt-16 overflow-hidden mb-16">
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center md:justify-end items-center bg-white rounded-l-md shadow-lg">
        <Image
          src="/bald-bouncer.jpg"
          alt="bouncer"
          width={400}
          height={300}
          className="rounded-l-md md:rounded-none w-full max-w-md md:max-w-full h-auto"
        />
      </div>

      {/* Right Section - Text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center bg-pink-300 px-8 py-10 md:py-16 rounded-r-md shadow-lg">
        <h2 className="text-xl md:text-2xl text-orange-600 font-bold mb-6">
          DUTIES OF A BOUNCER
        </h2>
        <div className="text-black text-base md:text-lg leading-relaxed space-y-4">
          <p>
            A bouncer&apos;s duties include providing security, checking legal age and drinking age, refusing entry to intoxicated persons, and dealing with aggressive, violent, or verbal behavior or disobedience to statutory or establishment rules.
          </p>
          <p>
            They are also responsible for maintaining order and ensuring that all laws and regulations are followed by patrons. We are available 24/7 for all your business, personal, and special occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Duties;
