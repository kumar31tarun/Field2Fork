// src/api/orderService.js
const ORDER_API_BASE_URL = "http://localhost:8080/orders";

export const fetchOrdersBySeller = async (sellerId) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${ORDER_API_BASE_URL}/user/${sellerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to fetch orders for seller");
    return await response.json();
  } catch (error) {
    console.error("Error fetching orders by seller:", error);
    return [];
  }
};
