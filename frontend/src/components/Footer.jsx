import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div>
  {/* Features Section */}
  <section className="bg-white py-12">
    <div className="container px-8 sm:px-12 lg:px-20 flex flex-nowrap gap-10">
      {/* Feature 1 */}
      <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">10 mins grocery now</h3>
        <p className="text-gray-600">Get your order delivered to your doorstep at the earliest from Field2fork pickup stores near you.</p>
      </div>

      {/* Feature 2 */}
      <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">Best Prices & Offers</h3>
        <p className="text-gray-600">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.</p>
      </div>

      {/* Feature 3 */}
      <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">Wide Assortment</h3>
        <p className="text-gray-600">Choose from 5000+ products across vegetables, fruits, grains, bakery & other categories.</p>
      </div>

      {/* Feature 4 */}
      <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">Easy Returns</h3>
        <p className="text-gray-600">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.</p>
      </div>
      </div>
     </section>
    </div>

<br/>
      <div className="container mx-auto px-4 flex flex-wrap justify-between bg-gray">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="font-bold text-xl mb-2">
            <img src="/logos/logo1.jpg" alt="Field2fork Logo" className="h-15 w-auto inline mr-2" />
            Field2fork
          </div>
          <p className="text-gray-600">We offer high-quality foods and the best delivery service, and the food market you can blindly trust</p>
          <div className="mt-4 flex">
            <a href="#" className="mr-6">
              <img src="/logos/facebook1.jpg" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="mr-6">
              <img src="/logos/instagram.jpg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="mr-6">
              <img src="/logos/twitter.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src="/logos/youtube.png" alt="YouTube" className="h-6 w-6" />
            </a>
          </div> {/* This closing div was missing */}
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 pl-8">
          <div className="font-medium text-lg mb-2">About Us</div>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">About us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Contact us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">About team</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Customer Support</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="font-medium text-lg mb-2">Our Information</div>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Privacy policy update</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Terms & conditions</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Return Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-500">Site Map</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <div className="font-medium text-lg mb-2">Subscribe Now</div>
          <p className="text-gray-600 mb-1">Subscribe your email for newsletter and featured news based on your interest</p>
          <div className="flex">
            <input type="email" placeholder="Write your email here" className="border border-gray-300 px-3 py-2 rounded-md mb-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded text-sm">Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white text-sm">Copyright 2025 REDQ All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;