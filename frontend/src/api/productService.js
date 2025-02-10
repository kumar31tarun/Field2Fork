const API_BASE_URL = "http://localhost:8080/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`);
    if (!response.ok) throw new Error("Product not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`, {
      method: "PATCH",
    });
    if (!response.ok) throw new Error("Failed to delete product");
    return await response.json();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const restoreProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}/restore`, {
      method: "PATCH",
    });
    if (!response.ok) throw new Error("Failed to restore product");
    return await response.json();
  } catch (error) {
    console.error("Error restoring product:", error);
  }
};
