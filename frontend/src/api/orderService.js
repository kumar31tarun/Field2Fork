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
