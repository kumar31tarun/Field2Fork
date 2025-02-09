// src/api/productService.js
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
    const data = await response.json();
    // If the API returns an array, return the first element; otherwise, return data as-is.
    return Array.isArray(data) ? data[0] : data;
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

// New API: fetch products by seller id
export const fetchProductsBySeller = async (sellerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/seller/${sellerId}`);
    if (!response.ok) throw new Error("Failed to fetch products for seller");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products by seller:", error);
    return [];
  }
};
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const addNewProduct = async (productData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error("Failed to add product");
    return await response.json();
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProductDetails = async (productData, productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error("Failed to update product");
    return await response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
