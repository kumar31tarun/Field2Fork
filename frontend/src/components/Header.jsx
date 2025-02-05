import { ShoppingCart, Search, Heart, LogIn, ShoppingBag } from "react-feather";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="flex  h-16 items-center justify-around">
      <div className="flex-1">
        {/* <ShoppingCart /> */}
        <img src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg" />
      </div>
      <div className="flex border-2 p-2 flex-3 justify-between">
        <div className="drop">
          <select>
            <option value="All-categories">All Categories</option>
            <option value="Eggs">Eggs</option>
            <option value="Buns">Buns</option>
            <option value="Milk & Cheese">Milk & Cheese</option>
          </select>
        </div>
        <div className=" flex-1 pl-1.5">
          <SearchBar />
        </div>
        <div className="border-2">
          <Search />
        </div>
      </div>
      <div className="flex-1 p-5">
        <button id="myButton" className="bg-emerald-600">
          Pick Location
        </button>
      </div>
      <div className=" flex justify-around flex-1">
        <div>
          <Heart />
        </div>
        <div>
          <LogIn />
        </div>
        <div>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
