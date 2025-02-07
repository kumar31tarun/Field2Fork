import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  getCartDetailsById,
  checkoutCart,
  deleteCartItem,
} from "./cartService";

const CartTable = ({ cartId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    totalItems: 0,
    totalQuantity: 0,
    tax: 0,
    subtotal: 0,
  });
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartId) {
      console.error("cartId is undefined!");
      return;
    }
    fetchCartDetails();
  }, [cartId]);

  const fetchCartDetails = async () => {
    const data = await getCartDetailsById(cartId);
    if (data) {
      //   setCartId(data.id);
      console.log(cartId);
      setCartItems(data.cartItems || []);
      calculateSummary(data.cartItems);
    }
  };

  const calculateSummary = (items) => {
    let totalQuantity = 0,
      subtotal = 0;
    items.forEach((item) => {
      totalQuantity += item.quantity;
      subtotal += item.price * item.quantity;
    });
    const tax = subtotal * 0.1;
    setSummary({
      totalItems: items.length,
      totalQuantity,
      tax,
      subtotal: subtotal + tax,
    });
  };

  const handleCheckout = async () => {
    const response = await checkoutCart(cartId);
    if (response && response.orderId) {
      navigate("/checkout", {
        state: {
          orderId: response.orderId,
          totalAmount: response.amount,
          razorpayOrderId: response.razorpayOrderId,
        },
      });
    } else {
      alert("Failed to create order. Please try again.");
    }
  };

  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      const success = await deleteCartItem(cartId, itemId); // Pass both cartId and itemId
      if (success) {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
        calculateSummary(cartItems.filter((item) => item.id !== itemId)); // Recalculate summary
      } else {
        alert("Failed to delete item. Please try again.");
      }
    }
  };

  return (
    <div className="flex w-full p-6 gap-6">
      <div className="flex-1 bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-center">${item.price.toFixed(2)}</td>
                  <td className="p-3 text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No items in the cart.
          </p>
        )}
      </div>

      <div className="w-80 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <p>Total Items: {summary.totalItems}</p>
        <p>Total Quantity: {summary.totalQuantity}</p>
        <p>Tax: ${summary.tax.toFixed(2)}</p>
        <p>Subtotal: ${summary.subtotal.toFixed(2)}</p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded">
            Redeem
          </button>
        </div>

        <button
          className="w-full bg-gradient-to-br from-green-600 to-teal-500 text-white p-2 mt-4 rounded"
          onClick={handleCheckout}
        >
          Go to Checkout - ${summary.subtotal.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default CartTable;
