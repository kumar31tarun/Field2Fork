const API_BASE_URL = "http://localhost:8080/users"; // Change this if needed

export const getBuyers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/buyers/after/0`);
    if (!response.ok) throw new Error("Failed to fetch buyers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching buyers:", error);
    return [];
  }
};

export const fetchMoreBuyers = async (lastFetchedId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/buyers/after/${lastFetchedId}`
    );
    if (!response.ok) throw new Error("Failed to fetch more buyers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching more buyers:", error);
    return [];
  }
};

export const fetchPrevBuyers = async (firstBuyerId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/buyers/before/${firstBuyerId}`
    );
    if (!response.ok) throw new Error("Failed to fetch previous buyers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching previous buyers:", error);
    return [];
  }
};

export const getBuyerById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/buyers/${id}`);
    if (!response.ok) throw new Error("Failed to fetch buyer");
    return await response.json();
  } catch (error) {
    console.error("Error fetching buyer by ID:", error);
    return [];
  }
};

export const getSellers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sellers/after/0`);
    if (!response.ok) throw new Error("Failed to fetch sellers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching sellers:", error);
    return [];
  }
};

export const fetchMoreSellers = async (lastFetchedId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sellers/after/${lastFetchedId}`
    );
    if (!response.ok) throw new Error("Failed to fetch more sellers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching more sellers:", error);
    return [];
  }
};

export const fetchPrevSellers = async (firstSellerId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sellers/before/${firstSellerId}`
    );
    if (!response.ok) throw new Error("Failed to fetch previous sellers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching previous sellers:", error);
    return [];
  }
};

export const getSellerById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sellers/${id}`);
    if (!response.ok) throw new Error("Failed to fetch seller");
    return await response.json();
  } catch (error) {
    console.error("Error fetching seller by ID:", error);
    return [];
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PATCH",
    });
    if (!response.ok) throw new Error("Failed to delete user");
    return await response.json(); // Return the response if needed
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const restoreUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/restore`, {
      method: "PATCH",
    });
    if (!response.ok) throw new Error("Failed to restore user");
    return await response.json(); // Return the response if needed
  } catch (error) {
    console.error("Error restoring user:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
