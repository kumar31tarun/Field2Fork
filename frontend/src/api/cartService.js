const API_BASE_URL = "http://localhost:8080/cart"; // Replace with actual backend URL

export const getCartDetailsById = async (id) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    if (!response.ok)
      throw new Error(
        `Failed to fetch cart details (Status: ${response.status})`
      );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
};

export const fetchCartTotalQuantity = async (userId) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (!data || !data.cartItems) {
      console.warn("Invalid response structure:", data);
      return 0; // Return 0 if cartItems is missing
    }
    const totalQuantity = data.cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    return totalQuantity; // Return the total quantity
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return 0; // Return an empty array in case of error
  }
};

export const getTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const deleteCartItem = async (cartId, itemId) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/${cartId}/items/${itemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to delete cart item");
    return true;
  } catch (error) {
    console.error("Error deleting item:", error);
    return false;
  }
};

export const checkoutCart = async (cartId) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/checkout/${cartId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
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
export const addToCart = async (cartRequest) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cartRequest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Rethrow the error to be handled in the component
  }
};
