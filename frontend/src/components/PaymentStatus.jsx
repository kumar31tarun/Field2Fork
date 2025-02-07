import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Home, RefreshCcw } from "lucide-react";

const PaymentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    paymentId,
    orderId,
    message,
    status = "FAILED",
  } = location.state || {};

  const isSuccess = status === "SUCCESS";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {isSuccess ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <CheckCircle className="text-green-500 w-20 h-20 animate-bounce" />
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2">
            Your order <strong>#{orderId}</strong> has been placed successfully.
          </p>
          <p className="text-gray-600">
            Transaction ID: <strong>{paymentId}</strong>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white px-6 py-2 mt-6 rounded-full flex items-center"
            onClick={() => navigate("/")}
          >
            <Home className="w-5 h-5 mr-2" /> Go to Home
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: 2 }}
          >
            <XCircle className="text-red-500 w-20 h-20" />
          </motion.div>
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            Payment Failed!
          </h2>
          <p className="text-gray-600 mt-2">
            We couldn't process your payment.
          </p>
          <p className="text-gray-600">
            Reason: <strong>{message || "Unknown Error"}</strong>
          </p>
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
        </motion.div>
      )}
    </div>
  );
};

export default PaymentStatus;
