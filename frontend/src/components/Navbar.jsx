import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/products/categories"
        );
        const data = await response.json();
        const formattedCategories = data.map((cat) => ({
          id: cat,
          name: cat.toString().replace(/_/g, " "),
        }));
        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white shadow-md w-full top-0 left-0 z-50 px-6 py-3">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen("categories")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center text-gray-600 font-medium hover:text-teal-600">
                All Categories
              </button>
              <div
                className={`absolute left-0 mt-2 bg-white border shadow-md w-52 rounded-md p-2 transition-all duration-300 ${
                  dropdownOpen === "categories"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                {categories.length > 0 ? (
                  <ul className="space-y-1">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="hover:bg-teal-100 rounded-md p-2"
                      >
                        <Link
                          to={`/category/${category.id}`}
                          className="flex items-center text-gray-600"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-2 text-gray-500">Loading...</p>
                )}
              </div>
            </div>

            <Link
              to="/"
              className="flex items-center text-gray-600 font-medium hover:text-teal-600 transition"
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen("shop")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center text-gray-600 font-medium hover:text-teal-600 transition">
                Shop
              </button>
              <div
                className={`absolute left-0 mt-2 bg-white border shadow-md w-40 rounded-md p-2 transition-all duration-300 ${
                  dropdownOpen === "shop"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/cart"
                  className="flex items-center p-2 hover:bg-teal-100 rounded-md text-gray-600"
                >
                  Cart
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center p-2 hover:bg-teal-100 rounded-md text-gray-600"
                >
                  Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center p-2 hover:bg-teal-100 rounded-md text-gray-600"
                >
                  Wishlist
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="flex items-center text-gray-600 font-medium hover:text-teal-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="flex items-center text-gray-600 font-medium hover:text-teal-600 transition"
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden py-4">
              <div className="flex flex-col items-center space-y-4">
                <Link
                  to="/"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  Cart
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center text-gray-600 hover:text-teal-600 transition"
                >
                  Wishlist
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
