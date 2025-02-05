import React from 'react';
import banner1 from "../assets/banner/grocery-banner-2.jpg"; // Adjust image path as necessary
import banner2 from "../assets/banner/grocery-banner.png"; // Adjust image path as necessary

const BannerCard = () => {
  return (
    <div className="flex gap-4 mx-auto px-4 md:px-10 lg:px-15">
      {/* First Banner */}
      <div className="w-full md:w-1/2 mb-3 lg:mb-0">
        <div
          className="py-10 px-8 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <h3 className="font-bold text-xl mb-1">Freshly Baked Buns</h3>
            <p className="mb-4 text-gray-400">
              Get Upto
              <span className="font-bold">25%</span>
              Off
            </p>
            <a
              href="#!"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Second Banner */}
      <div className="w-full md:w-1/2 mb-3 lg:mb-0">
        <div
          className="py-10 px-8 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <h3 className="font-bold text-xl mb-1">Fruits & Vegetables</h3>
            <p className="mb-4 text-gray-400">
              Get Upto
              <span className="font-bold">30%</span>
              Off
            </p>
            <a
              href="#!"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
