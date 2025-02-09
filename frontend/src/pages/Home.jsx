import Header from "../components/Header/Header";
import WelcomeCard from "../components/WelcomeCard";
import RenderOfferCard from "../components/RenderOfferCard";
import ShopByCategory from "../components/ShopByCategory";
import Footer from "../components/Footer";
import FruitsAndVegetable from "../components/FruitsAndVegetables";

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeCard />
      <RenderOfferCard />
      <ShopByCategory />
      <FruitsAndVegetable />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
