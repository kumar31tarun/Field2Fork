import React from "react";
//import bgImage from "../assets/Homepage1.jpg"; // Ensure the correct path

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center w-full"
        style={{ backgroundImage: `url('/src/assets/Contact.jpg')` }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content on Image */}
        <div className="relative z-10 text-white text-center px-6 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Do you need support?</h1>
          <h2 className="text-4xl font-bold mb-4">Our team is ready to help.</h2>
          <p className="text-lg text-gray-200">
          We are committed to bringing you the finest, fresh produce and farming essentials directly from local farms. Our goal is to offer high-quality, nutritious products while supporting farmers and simplifying your access to farm-fresh goods.
          </p>
        </div>
      </div>

      {/* Gray Background Container with Text & Form */}
      <div className="w-full bg-gray-100 py-16 flex justify-center">
        <div className="max-w-7xl w-full flex bg-white p-10 rounded-lg shadow-md">
          
          {/* Left Side: Text Content */}
          <div className="w-1/2 text-left text-gray-800 p-8">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Support is our main priority</h2>
            <p className="text-lg text-gray-600 mb-6">
            "At our core, we focus on bringing fresh vegetables, fruits, and all essential farming materials directly from farmers to your doorstep. We’re passionate about providing high-quality, locally sourced produce and supplies, ensuring that you receive the best of what the land offers with convenience and care."

            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address 
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Mobile
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
