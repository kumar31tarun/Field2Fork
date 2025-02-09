// src/api/productImageService.js
const PRODUCT_IMAGE_API_BASE_URL = "http://localhost:8080/product-images";

export const fetchProductImages = async (productId) => {
  try {
    const response = await fetch(
      `${PRODUCT_IMAGE_API_BASE_URL}/product/${productId}`
    );
    if (!response.ok) throw new Error("Failed to fetch product images");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product images:", error);
    return [];
  }
};

export const deleteProductImage = async (imageId) => {
  try {
    const response = await fetch(`${PRODUCT_IMAGE_API_BASE_URL}/${imageId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product image");
    return await response.json();
  } catch (error) {
    console.error("Error deleting product image:", error);
    throw error;
  }
};

export const uploadProductImage = async (productId, file) => {
  try {
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("image", file);
    const response = await fetch(`${PRODUCT_IMAGE_API_BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Failed to upload image");
    return await response.json();
  } catch (error) {
    console.error("Error uploading product image:", error);
    throw error;
  }
};

// (Other functions such as fetchProductImages and deleteProductImage should already be present.)
