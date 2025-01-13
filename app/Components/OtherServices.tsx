import Image from 'next/image';
import React from 'react';

const OtherServices = () => {
  return (
    <div className="p-4 overflow-hidden">
      <h1 className="text-3xl text-orange-500 text-center pt-5 mb-14 font-extrabold">
        OTHER SERVICES
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="font-bold text-2xl mb-6 text-black">
            OUR K9 SERVICES: <span className="font-bold text-orange-500">DOG BREEDING</span>
          </h1>
          <ul className="space-y-6">
            {[
              'We are dealers in all kinds of dogs',
              'Dog-sitting for clients on vacation',
              'Dog training for security',
              'Dog recommendations and pedigree safety in importation',
              'Pet food production',
            ].map((text, index) => (
              <li key={index} className="flex text-xl md:text-2xl items-center space-x-4">
                <span className="text-orange-500 font-bold text-lg">&#8226;</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 text-white bg-orange-500 py-2 px-6 rounded-md hover:bg-orange-800">
            CONTACT US
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Central Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src="/Ellipse 2.png"
                alt="Main Dog"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Smaller Images */}
          <div className="absolute top-4 left-4  w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src="/Ellipse 4.png"
              alt="Dog 1"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-4 left-1/4 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src="/Ellipse 3.png"
              alt="Dog 2"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-4 right-1/4 transform translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src="/Ellipse 5.png"
              alt="Dog 3"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src="/Ellipse 1.png"
              alt="Dog 4"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
