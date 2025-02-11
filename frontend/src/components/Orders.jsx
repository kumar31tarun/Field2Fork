import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Package, Truck, CheckCircle } from "lucide-react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 2;

  useEffect(() => {
    const fetchOrders = async () => {
      const authDataStr = sessionStorage.getItem("authData");
      const token = authDataStr ? JSON.parse(authDataStr).token : "";

      // If there's no token, log an error and don't make the request.
      if (!token) {
        console.error("No valid token found in session storage.");
        return;
      }
      try {
        const response = await fetch(
          `http://localhost:8080/orders/user/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const fetchOrderItems = async (orderId) => {
    const authDataStr = sessionStorage.getItem("authData");
    const token = authDataStr ? JSON.parse(authDataStr).token : "";

    // If there's no token, log an error and don't make the request.
    if (!token) {
      console.error("No valid token found in session storage.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8080/orders/${orderId}/items`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch order items");
      const data = await response.json();
      setOrderItems(data);
      setSelectedOrder(orderId);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
        {loading ? (
          <div className="text-center text-gray-600">Loading orders...</div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-gray-600 text-center">No orders found.</div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer"
                onClick={() => fetchOrderItems(order.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Order #{order.id}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Order Date:{" "}
                      {new Date(order.order_date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Delivery Date:{" "}
                      {new Date(order.deliveryDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-gray-700 font-bold">
                    ₹{order.totalAmount}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                  {order.orderStatus === "SHIPPED" && (
                    <Truck className="w-5 h-5 text-blue-500" />
                  )}
                  {order.orderStatus === "DELIVERED" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {order.orderStatus === "PENDING" && (
                    <Package className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="font-semibold">{order.orderStatus}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedOrder && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Order Items</h2>
            <div className="mt-4 space-y-3">
              {orderItems.length > 0 ? (
                orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <h3 className="text-gray-800 font-semibold">
                        {item.productName}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-gray-800 font-bold">₹{item.price}</div>
                  </div>
                ))
              ) : (
                <div className="text-gray-600">
                  No items found for this order.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
