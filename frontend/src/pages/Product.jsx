import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ProductDetails from "../components/Product/ProductDetails";
import Navbar from "./../components/Navbar";

const Product = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductDetails />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default Product;
