import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Mail, User, Phone, MapPin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Seller_SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactNumber: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.address
    ) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Registering with", formData);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-teal-500 p-6">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        <motion.h1
          className="text-3xl font-bold text-center text-teal-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Field2Fork
        </motion.h1>
        <h2 className="text-2xl font-semibold text-center text-teal-700">
          Seller SignUp
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleRegister} className="mt-6">
          <div className="relative mb-4">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <Phone
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.address}
              onChange={handleChange}
              className="w-full pl-12 p-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200 shadow-md"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">or sign up with</div>
        <div className="mt-4 flex gap-3">
          <button
            className="flex items-center justify-center w-1/2 p-3 border border-teal-400 rounded-lg hover:bg-teal-50 transition shadow-sm"
            aria-label="Sign up with Google"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="mr-2 text-red-500"
              size="lg"
            />
            Google
          </button>
          <button
            className="flex items-center justify-center w-1/2 p-3 border border-teal-400 rounded-lg hover:bg-teal-50 transition shadow-sm"
            aria-label="Sign up with GitHub"
          >
            <Github size={20} className="mr-2 text-gray-800" />
            GitHub
          </button>
        </div>
        <div className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-600 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seller_SignUp;
