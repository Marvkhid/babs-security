import React from 'react';
import Image from 'next/image';

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch space-y-10 md:space-y-0 px-4 md:px-10 xl:px-20 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Left Section - Image */}
      <div className="flex justify-center md:justify-end w-full md:w-2/5">
        <Image
          src="/suited-bouncer.jpg"
          alt="suited-bouncer"
          width={500} 
          height={350}
          className="rounded-md shadow-lg w-full h-auto"
        />
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 bg-pink-300 pt-8 pb-10 px-8 md:px-12 lg:px-20 rounded-md shadow-lg flex flex-col justify-start">
        <div className="space-y-4">
          <h2 className="text-black font-bold text-2xl">Need our service?</h2>
          <p className="text-lg text-gray-800">
            Our customer representatives are available on a 24-hour basis to attend to all your inquiries.
          </p>
          <p className="text-lg text-gray-800">
            For more information, please contact us directly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/contact.png"
              alt="contact"
              width={30}
              height={30}
              className="bg-orange-500 w-8 h-8 rounded-full"
            />
            <span className="font-bold text-black text-lg">
              Ikorodu Lagos, Lagos Nigeria
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/whatsapp.jpeg"
              alt="whatsapp"
              width={30}
              height={30}
              className="bg-orange-500 w-8 h-8 rounded-full"
            />
            <span className="font-bold text-orange-500 text-lg">
              <a
                href="https://wa.me/2348107387326"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Chat with us on WhatsApp
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/mail.png"
              alt="email"
              width={30}
              height={30}
              className="bg-orange-500 w-8 h-8 rounded-full"
            />
            <span className="font-bold text-orange-500 text-lg">
              <a
                href="mailto:info@adeniyimarv@gmail.com"
                className="underline"
              >
                Get in touch: info@adeniyimarv@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center my-6 justify-center">
          <div className="text-center text-orange-500 text-2xl">
            <span className="border-b border-orange-500 w-28 inline-block"></span>
            <span className="mx-2">or</span>
            <span className="border-b border-orange-500 w-28 inline-block"></span>
          </div>
        </div>

        {/* Form Fields */}
        <h2 className="font-bold text-2xl text-black mb-4">Send us a message</h2>
        <label className="block text-base font-semibold mb-1">Name</label>
        <input
          type="text"
          placeholder="Full name"
          className="p-3 mb-4 rounded-xl w-full h-12"
        />

        <label className="block text-base font-semibold mb-1">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="p-3 mb-4 rounded-xl w-full h-12"
        />

        <label className="block text-base font-semibold mb-1">Services</label>
        <select
          id="services"
          className="block w-full bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 p-3 mb-4"
        >
          <option value="security">Security Services</option>
          <option value="canine">Canine Services</option>
        </select>

        <label className="block text-base font-semibold mb-1">Message</label>
        <textarea
          id="messages"
          placeholder="Write a message"
          className="w-full h-32 p-4 rounded-xl mb-4"
        ></textarea>

        <button className="bg-orange-500 w-full h-12 hover:bg-orange-800 rounded-xl font-bold text-xl text-white">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Form;
