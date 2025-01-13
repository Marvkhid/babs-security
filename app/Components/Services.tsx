import Image from 'next/image';
import React from "react";

export default function Home() {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image
              src="/bouncers.jpeg"
              alt="Security professionals"
              width={900} 
              height={900} 
              className="w-full h-full object-cover"
              priority 
            />
          </div>

          <div className="p-12 md:w-1/2 bg-pink-200 pb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              OUR SERVICES
            </h2>
            <p className="text-black text-2xl mb-6 font-bold">
              Security Solution for experts, by experts
            </p>
            <p className="text-black text-2xl mb-6">
              We are a fully trusted, bonded, and insured professional body
              builder (bouncers). Our SAFEZONE provides bouncers also known as
              Security Supervisors for licensed venues such as bars, nightclubs,
              cabaret clubs, casinos, hotels, restaurants, and more.
            </p>

            <div className="space-y-6">
              {[ 
                {
                  label: "Security Service",
                  width: "90%",
                  percentage: "90%",
                  color: "bg-orange-500", 
                },
                {
                  label: "Canine Services",
                  width: "70%",
                  percentage: "70%",
                  color: "bg-orange-500", 
                },
                {
                  label: "Safety",
                  width: "95%",
                  percentage: "95%",
                  color: "bg-orange-500",
                },
                {
                  label: "Pet food production",
                  width: "98%",
                  color: "bg-red-600",
                },
                {
                  label: "Dog training for security",
                  width: "98%",
                  color: "bg-red-600", 
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="relative mb-3">
                    <div className="flex justify-between items-center">
                      <label className="text-2xl">{item.label}</label>
                    </div>
                 
                    {item.percentage && (
                      <span className="absolute bottom-[-3.2rem] right-0 text-gray-700 text-sm">
                        {item.percentage}
                      </span>
                    )}
                  </div>
                  <div className="bg-gray-200 rounded-full h-4 w-full">
                    <div
                      className={`${item.color} h-4 rounded-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
