import Header from "../components/Header";
import Navbar from "../components/Navbar";
//import OfferCard from "../components/OfferCard";
import WelcomeCard from "../components/WelcomeCard";
import BannerCard from "../components/BannerCard";
//import RenderOfferCard from "../components/RenderOfferCard";
import ShopByCategory from "../components/ShopByCategory";
import Footer from "../components/Footer";
// import FruitsAndVegetable from "../components/FruitsAndVegetables";


const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <WelcomeCard />
      <br/>
      <BannerCard/>
      <br/>
      {/* <RenderOfferCard /> */}
      <ShopByCategory />
      {/* <FruitsAndVegetable /> */}
      <br />
      <hr className="border-t border-gray-300 my-6" />

      <Footer />
    </div>
  );
};

export default Home;
