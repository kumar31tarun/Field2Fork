import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ShoppingCart, Archive, User } from "lucide-react";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md w-full top-0 z-50 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/HomeImages/F2F.png"
                alt="Field2Fork"
                className="h-20 w-30"
              />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="w-1/3 relative hidden md:flex items-center border border-green-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full p-2 pl-4 outline-none"
            />
            <button className="bg-green-800 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition">
              Search
            </button>
          </div>

          {/* Icons with Labels */}
          <div className="flex space-x-6">
            {/* Notification */}
            <Link
              to="#"
              className="group flex flex-col items-center text-gray-700 transition"
            >
              <Bell className="text-gray-500 w-6 h-6 group-hover:text-green-700 transition duration-300" />
              <span className="text-xs text-gray-500 group-hover:text-green-700 transition duration-300">
                Notification
              </span>
            </Link>

            {/* Sign Up */}
            <button
              onClick={() => setShowRegister(true)}
              className="group flex flex-col items-center text-gray-700 transition"
            >
              <User className="text-gray-500 w-6 h-6 group-hover:text-green-700 transition duration-300" />
              <span className="text-xs text-gray-500 group-hover:text-green-700 transition duration-300">
                Sign up
              </span>
            </button>

            {/* Orders */}
            <Link
              to="/account-orders"
              className="group flex flex-col items-center text-gray-700 transition"
            >
              <Archive className="text-gray-500 w-6 h-6 group-hover:text-green-700 transition duration-300" />
              <span className="text-xs text-gray-500 group-hover:text-green-700 transition duration-300">
                My Orders
              </span>
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/Cart"
              //Here update later when the sessionStroage is implemented add the id form the storage in front of route as "/cart/:id"
              // also update the routes in app.jsx as similar
              className="group flex flex-col items-center text-gray-700 transition"
            >
              <ShoppingCart className="text-gray-500 w-6 h-6 group-hover:text-green-700 transition duration-300" />
              <span className="text-xs text-gray-500 group-hover:text-green-700 transition duration-300">
                Shopping Cart
              </span>
            </Link>
          </div>
        </div>
        {/* Sign Up Modal */}
        <AnimatePresence>
          {showRegister && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center border border-green-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  Sign Up As
                </h2>
                <div className="flex justify-center space-x-4 border-dotted border-2 border-green-800 p-4 rounded-lg">
                  <button
                    onClick={() => navigate("/signup/buyer")}
                    className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Buyer
                  </button>
                  <button
                    onClick={() => navigate("/signup/seller")}
                    className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                  >
                    Seller
                  </button>
                </div>
                <button
                  onClick={() => setShowRegister(false)}
                  className="mt-4 text-gray-500 hover:text-gray-700 transition"
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
