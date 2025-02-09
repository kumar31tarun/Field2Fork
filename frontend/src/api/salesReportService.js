// src/api/salesReportService.js
const SALES_REPORT_API_BASE_URL = "http://localhost:8080/sales-report";

export const fetchSalesReport = async (sellerId) => {
  try {
    const response = await fetch(`${SALES_REPORT_API_BASE_URL}/${sellerId}`);
    if (!response.ok) throw new Error("Failed to fetch sales report");
    return await response.json();
  } catch (error) {
    console.error("Error fetching sales report:", error);
    return null;
  }
};
