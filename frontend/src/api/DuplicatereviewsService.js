// api.js
const API_BASE_URL = "http://localhost:8080";

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow the error to be handled in the component
  }
};

export const fetchReviewsByProductId = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/${id}`);
    if (!response.ok) throw new Error("Error fetching reviews");
    const text = await response.text();
    return text.trim() ? JSON.parse(text) : [];
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Rethrow the error to be handled in the component
  }
};

export const addToCart = async (cartRequest) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

export const addReview = async (reviewData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error("Error adding review");
    }
    return await 201;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error; // Rethrow the error to be handled in the component
  }
};
