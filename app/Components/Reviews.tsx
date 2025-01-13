import Image from 'next/image';
import React from 'react';

const Reviews = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-screen-lg mt-16">
      <h3 className="text-orange-500 text-center text-2xl mb-4">TESTIMONIALS</h3>
      <h3 className="font-bold text-2xl text-center text-black mb-10">
        See what our clients are saying
      </h3>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="border-2 border-orange-500 rounded-2xl shadow-lg p-6 md:p-8 hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">
          <div className="flex flex-row flex-wrap items-start">
            {/* Text Content */}
            <div className="w-full">
              <h2 className="font-bold text-xl text-left pb-4">
                I strongly recommend BABS K9 anytime
              </h2>
              <p className="text-lg text-left">
                We are so grateful for BABS K9 and their amazing services. We can&apos;t express our gratitude for Floki. 
                He is amazing, we highly recommend BABS K9 for your canine services.
              </p>
              <p className="font-bold text-black text-lg mt-4">- Isiaka Toyin Abdullahi</p>
            </div>
            {/* Image */}
            <div className="w-full mt-4">
              <Image
                src="/isiaka-pic.jpg"
                alt="Mr Isiaka-pic"
                width={200}
                height={400}
                className="rounded-full mx-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border-2 border-orange-500 rounded-2xl shadow-lg p-6 md:p-8 hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">
          <div className="flex flex-row flex-wrap items-start">
            {/* Text Content */}
            <div className="w-full">
              <h2 className="font-bold text-xl text-left pb-4">Keep the good work</h2>
              <p className="text-lg text-left">
                You made it so simple. My guest felt safe to move around with your guys in nice outfits. Keep the good work going. Thanks, guys!
              </p>
              <p className="font-bold text-black text-lg mt-4">- Ayo Ajani</p>
            </div>
            {/* Image */}
            <div className="w-full mt-4">
              <Image
                src="/ayo-pic.jpg"
                alt="Mr Ayo-pic"
                width={200}
                height={400}
                className="rounded-full mx-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="border-2 border-orange-500 rounded-2xl shadow-lg p-6 md:p-8 hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">
          <div className="flex flex-row flex-wrap items-start">
            {/* Text Content */}
            <div className="w-full">
              <h2 className="font-bold text-xl text-left pb-4">Best Security Detail I have ever used</h2>
              <p className="text-lg text-left">
                The attention to detail from the security agents was amazing. They kept everything under wraps, and I didn&apos;t have to worry about anything.
              </p>
              <p className="font-bold text-black text-lg mt-4">- Adeyinka Olaoluwa Adeosun</p>
            </div>
            {/* Image */}
            <div className="w-full mt-4">
              <Image
                src="/adeyinka-pic.jpg"
                alt="Mr Adeyinka-pic"
                width={200}
                height={400}
                className="rounded-full mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
