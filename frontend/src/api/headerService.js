const API_BASE_URL = "http://localhost:8080/products";

export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:8080/products/categories");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.map((cat) => ({
      id: cat,
      name: cat.toString().replace(/_/g, " "),
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array in case of error
  }
};
