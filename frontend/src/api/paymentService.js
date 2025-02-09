const API_BASE_URL = "http://localhost:8080/payments";

export const processPayment = async (paymentData) => {
  const response = await fetch(`${API_BASE_URL}/process`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentData),
  });
  const responseBody = await response.json();
  console.log(responseBody);
  const orderId = responseBody.orderId;
  const message = responseBody.message;
  const paymentStatus = responseBody.paymentStatus;
  const razorpayOrderId = responseBody.razorpayOrderId;
  const razorpayPaymentId = responseBody.razorpayPaymentId;
  const razorpaySignature = responseBody.razorpaySignature;
  return {
    orderId,
    message,
    paymentStatus,
    razorpayOrderId,
    razorpaySignature,
  };
};

// Razorpay Integration Functions
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};
