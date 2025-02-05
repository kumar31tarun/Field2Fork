import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OfferCard from "./components/OfferCard";
import WelcomeCard from "./components/WelcomeCard";
import RenderOfferCard from "./components/RenderOfferCard";
import ShopByCategory from "./components/ShopByCategory";
import Footer from "./components/Footer";
import FruitsAndVegetable from "./components/FruitsAndVegetables";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <WelcomeCard />
      <RenderOfferCard />
      <ShopByCategory />
      <FruitsAndVegetable />
      <br />
      <Footer />
    </div>
  );
};

export default App;
