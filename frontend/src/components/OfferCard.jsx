// import React from 'react';

// const OfferCard = ({ image, heading, cashback, code, msg, color }) => {
//   return (
//     <div className="w-full md:w-1/3 px-4 py-4"> {/* Responsive width and padding */}
//       <div
//         className="border rounded-lg shadow-lg overflow-hidden" // Card styling with shadow
//         style={color ? { backgroundColor: color } : { backgroundColor: "#f0f0f0" }} // Conditional background color with default gray
//       >
//         <div className="p-6"> {/* Padding inside card content */}
//           <h2 className="font-sans text-2xl font-bold mb-2 text-center">{heading}</h2>
//           {cashback && <p className="text-gray-700 mb-1">Max cashback: {cashback}</p>} {/* Cashback paragraph */}
//           {code && <p className="text-gray-700 mb-1">Code: {code}</p>} {/* Code paragraph */}
//           {msg && (
//             <p className="text-lg font-semibold mb-2" style={{ color: "darkblue" }}>
//               {msg}
//             </p> // Colorful message
//           )}
//           <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfferCard;
