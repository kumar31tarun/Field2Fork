import { useParams } from "react-router-dom";
import CartTable from "../components/CartTable";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";

const Cart = () => {
  const { id } = useParams();

  console.log("🚀 Received cartId from URL:", id);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex ">
        {id ? <CartTable cartId={id} /> : <p>Loading cart...</p>}
      </div>
    </div>
  );
};

export default Cart;
