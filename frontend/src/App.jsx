// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import OfferCard from "./components/OfferCard";
// import WelcomeCard from "./components/WelcomeCard";
// import RenderOfferCard from "./components/RenderOfferCard";
// import ShopByCategory from "./components/ShopByCategory";
// import Footer from "./components/Footer";
// import FruitsAndVegetable from "./components/FruitsAndVegetables";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <WelcomeCard />
//       <RenderOfferCard />
//       <ShopByCategory />
//       <FruitsAndVegetable />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/contact" element={<ContactUs />} /> 
        {/* Use element prop instead of component */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
