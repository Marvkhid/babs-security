'use client';
import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-orange-600 p-6 pb-20 md:p-12 pt-32">
      <div className="md:w-1/2 text-center md:text-left space-4">
       
        <h3 className="text-lg md:text-xl text-white w-full">
          Securing Your Steps Through Comfort - Your Trusted Guardians
        </h3>
       
        <h1 className="py-4 font-bold text-black text-2xl md:text-4xl">
          BABS SAFEZONE AND K9 SERVICES LTD
        </h1>
       
        <h3 className="text-xl md:text-2xl text-white">
          <p>BABS is a registered organization with an expert board of members who are</p>
          <p>professionals in security and canine fields and have undergone practical</p>
          <p>experience in different organizations, departments, and trade zones.</p>
        </h3> <br />
        
        <button
          className="bg-white rounded text-orange-500 py-3 px-6 font-medium shadow-md hover:bg-orange-100 transition"
          onClick={() => (window.location.href = '#contact')}
        >
          CONTACT US
        </button>
      </div>

     
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/bouncer1.jpg"
          alt="bouncer"
          width={900}
          height={900}
          className="rounded shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Content;
