// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { ShoppingCart, Plus, Minus, Star, StarOff } from "lucide-react";
// import { motion } from "framer-motion";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [images] = useState([
//     "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
//     "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
//     "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
//   ]);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState("");
//   const [rating, setRating] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/products/${id}`);
//         if (!response.ok) throw new Error("Product not found");
//         const data = await response.json();
//         setProduct(data[0]);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/reviews/${id}`);
//         if (response.ok) {
//           const text = await response.text(); // Get response as text
//           if (text.trim()) {
//             // Check if the response is not empty
//             const data = JSON.parse(text);
//             setReviews(data);
//           } else {
//             setReviews([]); // Set an empty array if no data is returned
//           }
//         } else {
//           console.error("Error fetching reviews:", response.statusText);
//         }
//       } catch (err) {
//         console.error("Error fetching reviews:", err);
//       }
//     };
//     fetchProduct();
//     fetchReviews();
//   }, [id]);

//   const handleAddToCart = () => {
//     console.log("Added to cart:", { ...product, quantity });
//   };

//   const [zoomStyle, setZoomStyle] = useState({});

//   const handleMouseMove = (e) => {
//     const { offsetWidth, offsetHeight } = e.currentTarget;
//     const { left, top } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     const xPercent = (x / offsetWidth) * 100;
//     const yPercent = (y / offsetHeight) * 100;

//     setZoomStyle({
//       backgroundImage: `url(${images[selectedImage]})`,
//       backgroundSize: "200%", // Adjust zoom level
//       backgroundPosition: `${xPercent}% ${yPercent}%`,
//     });
//   };

//   const handleMouseLeave = () => {
//     setZoomStyle({});
//   };

//   const handleAddReview = async () => {
//     const reviewData = {
//       reviewText: newReview,
//       rating,
//       productId: Number(id),
//       userId: 1, // Example userId, replace dynamically as needed
//     };

//     try {
//       const response = await fetch("http://localhost:8080/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(reviewData),
//       });

//       if (response.ok) {
//         const newReviewData = await response.json();
//         setReviews((prev) => [...prev, newReviewData]);
//         setNewReview("");
//         setRating(0);
//       }
//     } catch (error) {
//       console.error("Error adding review:", error);
//     }
//   };

//   if (loading)
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="h-screen flex items-center justify-center"
//       >
//         <p className="text-center text-lg">Loading...</p>
//       </motion.div>
//     );

//   if (error)
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="h-screen flex items-center justify-center"
//       >
//         <p className="text-center text-red-500">{error}</p>
//       </motion.div>
//     );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white shadow-xl rounded-3xl overflow-hidden"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">
//             {/* Image Section */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-2xl overflow-hidden h-96"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               style={zoomStyle}
//             >
//               <img
//                 src={images[selectedImage]}
//                 alt={`Product Image ${selectedImage + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
//               />
//             </motion.div>

//             {/* Product Details */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-4"
//             >
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 {product.name}
//               </h1>
//               <p className="text-md text-gray-600 mb-4">
//                 {product.description}
//               </p>
//               <div className="flex items-center space-x-4 mb-4">
//                 <span className="text-2xl font-bold text-teal-600">
//                   ${product.pricePerUnit}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-medium
//                   ${
//                     product.status === "IN_STOCK"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {product.status.replace("_", " ")}
//                 </span>
//               </div>
//               <p className="text-gray-500 mb-4">
//                 Category: {product.category.replace("_", " ")}
//               </p>

//               {/* Quantity Selector */}
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-xl">
//                   <button
//                     onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                     className="p-2 hover:bg-teal-100 rounded-lg transition-colors"
//                   >
//                     <Minus className="text-teal-600" size={20} />
//                   </button>
//                   <span className="text-lg font-medium w-8 text-center">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity((q) => q + 1)}
//                     className="p-2 hover:bg-teal-100 rounded-lg transition-colors"
//                   >
//                     <Plus className="text-teal-600" size={20} />
//                   </button>
//                 </div>
//               </div>

//               {/* Add to Cart Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleAddToCart}
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl
//                   flex items-center justify-center space-x-3 transition-all"
//               >
//                 <ShoppingCart size={24} />
//                 <span className="text-lg font-semibold">Add to Cart</span>
//               </motion.button>

//               {/* Reviews Section */}
//               <div className="mt-8 ">
//                 <h2 className="text-2xl font-semibold text-gray-800">
//                   Reviews
//                 </h2>
//                 <div className="space-y-4 mt-4">
//                   {reviews.length > 0 ? (
//                     reviews.map((review) => (
//                       <div
//                         key={review.review_id}
//                         className="p-4 bg-white rounded-lg shadow"
//                       >
//                         <p className="font-medium">{review.userName}</p>
//                         <p className="text-gray-600">{review.reviewText}</p>
//                         <div className="flex">
//                           {Array.from({ length: 5 }).map((_, index) => (
//                             <span key={index}>
//                               {index < review.rating ? (
//                                 <Star className="text-yellow-500" size={20} />
//                               ) : (
//                                 <StarOff size={20} />
//                               )}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No reviews yet.</p>
//                   )}
//                 </div>

//                 {/* Add Review Form */}
//                 <div className="mt-6 p-4 bg-white rounded-lg shadow">
//                   <h3 className="text-lg font-medium">Add a Review</h3>
//                   <textarea
//                     className="w-full p-2 border rounded-lg mt-2"
//                     rows="3"
//                     value={newReview}
//                     onChange={(e) => setNewReview(e.target.value)}
//                     placeholder="Write your review here..."
//                   />
//                   <div className="flex items-center mt-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <button key={index} onClick={() => setRating(index + 1)}>
//                         {index < rating ? (
//                           <Star className="text-yellow-500" size={24} />
//                         ) : (
//                           <StarOff size={24} />
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                   <button
//                     onClick={handleAddReview}
//                     className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg"
//                   >
//                     Submit Review
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className="md:col-span-1">
//             <div className="container mx-auto py-4 px-4">
//               <motion.div
//                 className="flex gap-4 overflow-x-auto pb-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {images.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setSelectedImage(index)}
//                     className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 ${
//                       selectedImage === index
//                         ? "border-teal-500"
//                         : "border-gray-200"
//                     }`}
//                   >
//                     <img
//                       src={images[index]}
//                       alt={`Thumbnail ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </motion.button>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Star, StarOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [images] = useState(["", ""]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:8080/reviews/${id}`);
        if (response.ok) {
          const text = await response.text();
          if (text.trim()) {
            const data = JSON.parse(text);
            setReviews(data);
          } else {
            setReviews([]);
          }
        } else {
          console.error("Error fetching reviews:", response.statusText);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchProduct();
    fetchReviews();
  }, [id]);

  const handleAddToCart = async () => {
    const cartItem = {
      product_id: product.id,
      quantity: quantity,
    };

    const cartRequest = {
      userId: 1,
      cartItems: [cartItem],
    };

    try {
      const response = await fetch("http://localhost:8080/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartRequest),
      });

      if (response.ok) {
        toast.success("Item added to cart!");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart.");
    }
  };

  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / offsetWidth) * 100;
    const yPercent = (y / offsetHeight) * 100;

    setZoomStyle({
      backgroundImage: `url(${images[selectedImage]})`,
      backgroundSize: "200%", // Adjust zoom level
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  const handleAddReview = async () => {
    const reviewData = {
      reviewText: newReview,
      rating,
      productId: Number(id),
      userId: 1,
    };

    try {
      const response = await fetch("http://localhost:8080/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        const newReviewData = await response.json();
        setReviews((prev) => [...prev, newReviewData]);
        setNewReview("");
        setRating(0);
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center"
      >
        <p className="text-center text-lg">Loading...</p>
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center"
      >
        <p className="text-center text-red-500">{error}</p>
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8"
    >
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-xl rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">
            {/* Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-2xl overflow-hidden h-96"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={zoomStyle}
            >
              <img
                src={images[selectedImage]}
                alt={`Product Image ${selectedImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-md text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold text-teal-600">
                  ${product.pricePerUnit}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    product.status === "IN_STOCK"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.status.replace("_", " ")}
                </span>
              </div>
              <p className="text-gray-500 mb-4">
                Category: {product.category.replace("_", " ")}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-xl">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-teal-100 rounded-lg transition-colors"
                  >
                    <Minus className="text-teal-600" size={20} />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-teal-100 rounded-lg transition-colors"
                  >
                    <Plus className="text-teal-600" size={20} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl
                  flex items-center justify-center space-x-3 transition-all"
              >
                <ShoppingCart size={24} />
                <span className="text-lg font-semibold">Add to Cart</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="md:col-span-1">
            <div className="container mx-auto py-4 px-4">
              <motion.div
                className="flex gap-4 overflow-x-auto pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 ${
                      selectedImage === index
                        ? "border-teal-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={images[index]}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
