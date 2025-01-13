import React from 'react';

const Footers = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center lg:gap-40 items-center p-6 bg-orange-500 sm:px-8 md:px-16">
      {/* Left Section - Copyright */}
      <div className="text-center sm:text-left">
        <p className="text-white text-xl sm:text-2xl">
          © 2023 by BABS Safezone. All rights reserved.
        </p>
      </div>

      {/* Right Section - Links */}
      <div className="text-center sm:text-right mt-4 sm:mt-0">
        <p className="text-white text-xl sm:text-2xl">
          Terms and conditions | Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Footers;
