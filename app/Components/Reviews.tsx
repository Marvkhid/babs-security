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
        <div className="border-2 border-orange-500 rounded-2xl p-6 md:p-8 text-black shadow-lg hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">

          <h2 className="font-bold text-xl text-center pb-4">
            I strongly recommend BABS K9 anytime
          </h2>
          <p className="text-lg text-center">
            We are so grateful for BABS K9 and their amazing services. We can't express our gratitude for Floki. 
            He is amazing, we highly recommend BABS K9 for your canine services.
          </p>
          <br />
          <div className="flex items-center justify-between mt-4">
            <p className="font-bold text-black text-lg">-Isiaka Toyin Abdullahi</p>
            <Image
              src="/isiaka-pic.jpg"
              alt="Mr Isiaka-pic"
              width={50}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border-2 border-orange-500 rounded-2xl p-6 md:p-8 text-black shadow-lg hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">
       
          <h2 className="font-bold text-xl text-center pb-4">
            Keep the good work
          </h2>
          <p className="text-lg text-center">
          You made it so simple. My guest felt safe to move around with your guys on nice outfit.
           keep the good work going . Thanks, guys!”
          </p>
          <br />
          <div className="flex items-center justify-between mt-4">
            <p className="font-bold text-black text-lg">-Isiaka Toyin Abdullahi</p>
            <Image
              src="/ayo-pic.jpg"
              alt="Mr Ayo-pic"
              width={50}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="border-2 border-orange-500 rounded-2xl p-6 md:p-8 text-black shadow-lg hover:scale-105 hover:bg-orange-500 transition-transform duration-300 ease-in-out">

          <h2 className="font-bold text-xl text-center pb-4">
           Best Security Detail I have ever used 
          </h2>
          <p className="text-lg text-center">
          The attention to details of the security agents was amazing. They kept everything under 
          wraps and I did not have to worry about anything
          </p>
          <br />
          <div className="flex items-center justify-between mt-4">
            <p className="font-bold text-black text-lg">-Isiaka Toyin Abdullahi</p>
            <Image
              src="/adeyinka-pic.jpg"
              alt="Mr Adeyinka-pic"
              width={50}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
