// src/api/orderService.js
const ORDER_API_BASE_URL = "http://localhost:8080/orders";

export const fetchOrdersBySeller = async (sellerId) => {
  try {
    const response = await fetch(`${ORDER_API_BASE_URL}/user/${sellerId}`);
    if (!response.ok) throw new Error("Failed to fetch orders for seller");
    return await response.json();
  } catch (error) {
    console.error("Error fetching orders by seller:", error);
    return [];
  }
};

export const fetchOrdersByUserId = async (userId) => {
  try {
    const response = await fetch(`${ORDER_API_BASE_URL}/user/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch orders");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchOrderItemsByOrderId = async (orderId) => {
  try {
    const response = await fetch(`${ORDER_API_BASE_URL}/${orderId}/items`);
    if (!response.ok) throw new Error("Failed to fetch order items");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const CancelOrderById = async (orderId) => {
  try {
    const response = await fetch(`${ORDER_API_BASE_URL}/${orderId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to cancel order");

    return response;
  } catch (error) {
    throw error;
  }
};
