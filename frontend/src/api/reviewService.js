const API_BASE_URL = "http://localhost:8080/reviews";

export const fetchReviews = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch reviews");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

export const deleteReviewById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete review");
    return await response.json(); // Optionally return the response
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const fetchReviewByProductId = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`);
    if (!response.ok)
      throw new Error("Failed to fetch reviews for the product");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reviews by Product ID:", error);
    return [];
  }
};
