import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./components/Header/Seller_SignUp";
import LoginForm from "./components/Header/LoginForm";
import Seller_SignUp from "./components/Header/Seller_SignUp";
import Buyer_SignUp from "./components/Header/Buyer_SignUp";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/signup/seller" element={<Seller_SignUp />} />
        <Route path="/signup/buyer" element={<Buyer_SignUp />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/seller/*" element={<SellerDashboard />} />
        {/* Use element prop instead of component */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
