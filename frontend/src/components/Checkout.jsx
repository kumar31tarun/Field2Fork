import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadRazorpayScript, processPayment } from "./paymentService";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Home, RefreshCcw } from "lucide-react";

const Checkout = () => {
  const location = useLocation();
  const { orderId, totalAmount, razorpayOrderId } = location.state || {}; // Prevents crashes if state is undefined
  const [address, setAddress] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      await loadRazorpayScript();
      const options = {
        key: "rzp_test_kQx4rr9DSjnBdc",
        amount: totalAmount * 100, // Convert to paise
        currency: "INR",
        name: "Field2Fork",
        description: "Order Description",
        order_id: razorpayOrderId,
        handler: async (response) => {
          const paymentData = {
            orderId: orderId,
            amount: totalAmount,
            paymentMethod: "RAZORPAY",
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            paymentStatus: "SUCCESS",
          };

          setPaymentId(response.razorpay_payment_id);
          const verification = await processPayment(paymentData);

          if (verification.paymentStatus === "SUCCESS") {
            setPaymentStatus("success");
            setMessage(`Your order #${orderId} has been placed successfully.`);
          } else {
            setPaymentStatus("failure");
            setMessage("We couldn't process your payment. Please try again.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
        },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Checkout</h2>
      <p>Total Amount: ₹{totalAmount}</p>
      <input
        type="text"
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border rounded mt-4"
      />
      <button
        className="w-full bg-green-500 text-white p-2 mt-4 rounded"
        onClick={handlePayment}
      >
        Place Order
      </button>

      {paymentStatus && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col items-center"
          >
            {paymentStatus === "success" ? (
              <>
                <CheckCircle className="text-green-500 w-20 h-20 animate-bounce" />
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                  Payment Successful!
                </h2>
                <p className="text-gray-600 mt-2">{message}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 text-white px-6 py-2 mt-6 rounded-full flex items-center"
                  onClick={() => navigate("/")}
                >
                  <Home className="w-5 h-5 mr-2" /> Go to Home
                </motion.button>
              </>
            ) : (
              <>
                <XCircle className="text-red-500 w-20 h-20" />
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                  Payment Failed!
                </h2>
                <p className="text-gray-600 mt-2">{message}</p>
                <div className="flex space-x-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-500 text-white px-6 py-2 rounded-full flex items-center"
                    onClick={() => navigate("/")}
                  >
                    <Home className="w-5 h-5 mr-2" /> Go to Home
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-500 text-white px-6 py-2 rounded-full flex items-center"
                    onClick={() => navigate("/checkout")}
                  >
                    <RefreshCcw className="w-5 h-5 mr-2" /> Retry Payment
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
