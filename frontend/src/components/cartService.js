const API_BASE_URL = "http://localhost:8080/cart"; // Replace with actual backend URL

export const getCartDetailsById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok)
      throw new Error(
        `Failed to fetch cart details (Status: ${response.status})`
      );
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
};

export const deleteCartItem = async (cartId, itemId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${cartId}/items/${itemId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete cart item");
    return true;
  } catch (error) {
    console.error("Error deleting item:", error);
    return false;
  }
};

export const checkoutCart = async (cartId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/checkout/${cartId}`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Failed to Proceed for Checkout");
    // Parse the response body
    const responseBody = await response.json();
    console.log(response);
    // Extract the order details from the response body
    const orderId = responseBody.orderId;
    const razorpayOrderId = responseBody.razorpayOrderId;
    const amount = responseBody.amount;
    const currency = responseBody.currency;
    const receipt = responseBody.receipt;
    const status = responseBody.status;

    // Return the order details
    return {
      orderId,
      razorpayOrderId,
      amount,
      currency,
      receipt,
      status,
    };
  } catch (error) {
    console.error("Error during checkout:", error);
    return null;
  }
};
