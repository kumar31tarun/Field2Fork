// import React from "react";

// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         {/* Features Section */}
//         <section className="bg-white py-12">
//           <div className="container px-8 sm:px-12 lg:px-20 flex flex-nowrap gap-10">
//             {/* Feature 1 */}
//             <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 10 mins grocery now
//               </h3>
//               <p className="text-gray-600">
//                 Get your order delivered to your doorstep at the earliest from
//                 Field2fork pickup stores near you.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Best Prices & Offers
//               </h3>
//               <p className="text-gray-600">
//                 Cheaper prices than your local supermarket, great cashback
//                 offers to top it off. Get best prices & offers.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Wide Assortment
//               </h3>
//               <p className="text-gray-600">
//                 Choose from 5000+ products across vegetables, fruits, grains,
//                 bakery & other categories.
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className="w-1/4 text-center bg-green-400 p-6  hover:bg-green-500 rounded-xl shadow-2xl hover:shadow-green-800/50 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Easy Returns
//               </h3>
//               <p className="text-gray-600">
//                 Not satisfied with a product? Return it at the doorstep & get a
//                 refund within hours. No questions asked policy.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <br />
//       <div className="container mx-auto px-4 flex flex-wrap justify-between bg-gray">
//         <div className="w-full md:w-1/4 mb-6 md:mb-0">
//           <div className="font-bold text-xl mb-2">
//             <img
//               src="/logos/logo1.jpg"
//               alt="Field2fork Logo"
//               className="h-15 w-auto inline mr-2"
//             />
//             Field2fork
//           </div>
//           <p className="text-gray-600">
//             We offer high-quality foods and the best delivery service, and the
//             food market you can blindly trust
//           </p>
//           <div className="mt-4 flex">
//             <a href="#" className="mr-6">
//               <img
//                 src="/logos/facebook1.jpg"
//                 alt="Facebook"
//                 className="h-6 w-6"
//               />
//             </a>
//             <a href="#" className="mr-6">
//               <img
//                 src="/logos/instagram.jpg"
//                 alt="Instagram"
//                 className="h-6 w-6"
//               />
//             </a>
//             <a href="#" className="mr-6">
//               <img src="/logos/twitter.png" alt="Twitter" className="h-6 w-6" />
//             </a>
//             <a href="#">
//               <img src="/logos/youtube.png" alt="YouTube" className="h-6 w-6" />
//             </a>
//           </div>{" "}
//           {/* This closing div was missing */}
//         </div>
//         <div className="w-full md:w-1/4 mb-6 md:mb-0 pl-8">
//           <div className="font-medium text-lg mb-2">About Us</div>
//           <ul className="list-none p-0">
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 About us
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Contact us
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 About team
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Customer Support
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 mb-6 md:mb-0">
//           <div className="font-medium text-lg mb-2">Our Information</div>
//           <ul className="list-none p-0">
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Privacy policy update
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Terms & conditions
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Return Policy
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-600 hover:text-blue-500">
//                 Site Map
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4">
//           <div className="font-medium text-lg mb-2">Subscribe Now</div>
//           <p className="text-gray-600 mb-1">
//             Subscribe your email for newsletter and featured news based on your
//             interest
//           </p>
//           <div className="flex">
//             <input
//               type="email"
//               placeholder="Write your email here"
//               className="border border-gray-300 px-3 py-2 rounded-md mb-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded text-sm">
//               Subscribe Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-800 py-4 mt-8">
//         <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
//           <div className="text-white text-sm">
//             Copyright 2025 REDQ All rights reserved
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

//export default Footer;

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Truck,
  BadgePercent,
  Leaf,
  RefreshCw,
  Users,
  Mail,
  Shield,
  Gift,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  const features = [
    {
      icon: Truck,
      title: "10 mins grocery now",
      description:
        "Get your order delivered to your doorstep at the earliest from Field2fork pickup stores near you.",
    },
    {
      icon: BadgePercent,
      title: "Best Prices & Offers",
      description:
        "Cheaper prices than your local supermarket, great cashback offers to top it off.",
    },
    {
      icon: Leaf,
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across vegetables, fruits, grains, bakery & other categories.",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description:
        "Not satisfied with a product? Return it at the doorstep & get a refund within hours.",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Features Section
      <div className="bg-white container mx-auto px-4 py-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-emerald-100 rounded-xl shadow-md hover:bg-emerald-200 transition-all duration-300 hover:-translate-y-1 border border-gray-300"
              whileHover={{ scale: 1.02 }}
            >
              <feature.icon className="w-12 h-12 mb-4 p-2 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-3 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        {/* Main Footer Section */}
        <div className="bg-gray-100 py-12 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-8 h-8 text-emerald-600" />
                <span className="text-2xl font-bold text-black">
                  Field2fork
                </span>
              </div>
              <p className="text-gray-700">
                We offer high-quality foods and the best delivery service you
                can trust.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="w-6 h-6 text-emerald-600 hover:text-teal-800 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-black">
                <Users className="w-5 h-5 text-emerald-600" /> About Us
              </h4>
              <ul className="space-y-2">
                {["About us", "Contact us", "Our team", "Careers"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      <Link to={`/${item.replace(" ", "").toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-black">
                <Shield className="w-5 h-5 text-emerald-600" /> Policies
              </h4>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Return Policy",
                  "FAQ",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <Link
                    //to={`/${item.replace(" ", "-").toLowerCase()}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-black">
                <Mail className="w-5 h-5 text-emerald-600" /> Newsletter
              </h4>
              <p className="text-gray-700">
                Subscribe for updates and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-gray-100 py-6 text-center text-gray-700">
          <p>© 2025 Field2fork. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (item, index) => (
                <Link
                  key={index}
                  //to={`/${item.replace(" ", "-").toLowerCase()}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
