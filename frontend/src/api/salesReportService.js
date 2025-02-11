// src/api/salesReportService.js
const SALES_REPORT_API_BASE_URL = "http://localhost:8080/sales-report";

export const fetchSalesReport = async (sellerId) => {
  const authDataStr = sessionStorage.getItem("authData");
  const token = authDataStr ? JSON.parse(authDataStr).token : "";

  // If there's no token, log an error and don't make the request.
  if (!token) {
    console.error("No valid token found in session storage.");
    return;
  }
  try {
    const response = await fetch(`${SALES_REPORT_API_BASE_URL}/${sellerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    if (!response.ok) throw new Error("Failed to fetch sales report");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sales report:", error);
    return null;
  }
};
