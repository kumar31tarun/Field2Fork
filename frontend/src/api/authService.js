// authService.js

/**
 * Logs in the user by calling the backend API.
 *
 * @param {string} email - The email input by the user.
 * @param {string} password - The password input by the user.
 * @returns {Promise<Object>} - Returns the login response data.
 * @throws {Error} - Throws an error if the login fails.
 */
export async function login(email, password) {
  try {
    // Send the POST request with the correct body: email and password
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // If the response status is not OK, try to get a detailed error message
    if (!response.ok) {
      let errorMessage = `Error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (jsonError) {
        const errorText = await response.text();
        errorMessage = errorText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    // Parse the JSON response
    const data = await response.json();

    // Store the returned data in sessionStorage
    sessionStorage.setItem("authData", JSON.stringify(data));

    // Check the user role and navigate accordingly
    const role = data.user?.role;
    if (role === "ADMIN") {
      window.location.href = "http://localhost:5173/admin";
    } else if (role === "SELLER") {
      window.location.href = "http://localhost:5173/seller";
    } else if (role === "BUYER") {
      window.location.href = "http://localhost:5173/";
    } else {
      throw new Error("Unknown user role.");
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
