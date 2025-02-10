//static data
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        name: 'Grapes',
        image: '/Products/grapes.jpg',
        price: '$1',
   
    },
    {
        id: 2,
        name: 'Avocado',
        image: '/Products/avocado.jpg',
        price: '$2',
     
    },
    {
        id: 3,
        name: 'Strawberry',
        image: '/Products/strawberry.jpg',
        price: '$3',
  
    },
    {
        id: 5,
        name: 'Apple',
        image: '/Products/apple.jpg',
        price: '$3',
      
    },
    {
        id: 5,
        name: 'Apple',
        image: '/Products/apple.jpg',
        price: '$3',
      
    },
    {
        id: 6,
        name: 'Apple',
        image: '/Products/apple.jpg',
        price: '$3',
       
    },
];

const categories = [
    "Dairy, Bread & Eggs",
    "Fruits",
    "Fruits & Vegetables",
    "Breakfast & Instant Food",
    "Bakery & Biscuits",
    "Chicken, Meat & Fish"
];

const Shopgrid = () => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [showCount, setShowCount] = useState(10); // Default show count
    const [sortBy, setSortBy] = useState('Featured'); // Default sort by

    const handleShowCountChange = (event) => {
        setShowCount(parseInt(event.target.value, 10));
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };


    return (
        <div className="container mx-auto p-6 flex gap-6 bg-gray-100 font-sans"> {/* Added font-sans */}
            {/* Categories Sidebar */}
            <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden"> {/* Added overflow-hidden */}
                <div className="p-4"> {/* Added padding to the sidebar content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Categories</h3>
                    <ul className="space-y-2 text-gray-700 font-medium">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:text-green-500 transition-colors duration-300 py-1 border-b border-gray-200" // Added padding
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                    {/* Rating Selection */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Ratings</h4>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className={`text-2xl ${selectedRating >= star ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-600 transition-colors`} // Added hover effect
                                    onClick={() => setSelectedRating(star)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range Slider (Example) */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Price Range</h4>
                        <input type="range" min="0" max="100" className="w-full" /> {/* Replace with a better slider library */}
                    </div>

                    {/* Discount Filter (Example) */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Discount</h4>
                        <div className="flex items-center">
                            <input type="checkbox" id="discount" className="mr-2" />
                            <label htmlFor="discount" className="text-gray-700">Show discounted products</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="w-3/4">
                <div className="bg-green-100 p-4 rounded-lg mb-6 flex items-center justify-between"> {/* Flexbox for title and filter */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-green-600 uppercase tracking-wide">Fruits</h2>
                        
                    </div>
                    {/* You can add something here next to the title, like a filter icon or button */}
                </div>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700 font-medium">{products.length} Products found</p>
                    <div className="flex items-center space-x-4">
                        {/* ... (your show/sort dropdowns) */}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform relative"> {/* Added relative for badge positioning */}
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
                            <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.store}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-green-600 font-semibold">{product.price}</p>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"> {/* Added transition-colors */}
                                    Add
                                </button>
                            </div>
                            {/* Example Badge (You can customize this)
                            <div className="absolute top-4 right-4 bg-yellow-300 text-yellow-700 px-2 py-1 rounded-md text-sm font-semibold">Sale!</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shopgrid;
 


// import React, { useState, useEffect } from 'react';

// const categories = [
//     "Dairy, Bread & Eggs",
//     "Fruits",
//     "Fruits & Vegetables",
//     "Breakfast & Instant Food",
//     "Bakery & Biscuits",
//     "Chicken, Meat & Fish"
// ];

// const Shopgrid = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("Fruits"); // Default category
//     const [selectedRating, setSelectedRating] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchProducts(selectedCategory);
//     }, [selectedCategory]);

//     const fetchProducts = async (category) => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await fetch(`http://localhost:8080/category?category=${category}`);
//             if (!response.ok) {
//                 throw new Error("No Products found for this category");
//             }
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             setError(error.message);
//             setProducts([]);
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="container mx-auto p-6 flex gap-6 bg-gray-100 font-sans">
//             {/* Categories Sidebar */}
//             <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden p-4">
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">Categories</h3>
//                 <ul className="space-y-2 text-gray-700 font-medium">
//                     {categories.map((category, index) => (
//                         <li
//                             key={index}
//                             className={`cursor-pointer py-2 border-b border-gray-200 hover:text-green-500 transition-colors duration-300 ${selectedCategory === category ? 'font-bold text-green-600' : ''}`}
//                             onClick={() => setSelectedCategory(category)}
//                         >
//                             {category}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Rating Selection */}
//                 <div className="mt-6">
//                     <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Ratings</h4>
//                     <div className="flex space-x-2">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <button
//                                 key={star}
//                                 className={`text-2xl ${selectedRating >= star ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-600 transition-colors`}
//                                 onClick={() => setSelectedRating(star)}
//                             >
//                                 ★
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Products Grid */}
//             <div className="w-3/4">
//                 <div className="bg-green-100 p-4 rounded-lg mb-6 flex items-center justify-between">
//                     <h2 className="text-3xl font-extrabold text-green-600 uppercase tracking-wide">{selectedCategory}</h2>
//                 </div>

//                 {loading ? (
//                     <p className="text-center text-gray-600">Loading...</p>
//                 ) : error ? (
//                     <p className="text-center text-red-500">{error}</p>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                         {products.map((product) => (
//                             <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform">
//                                 <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
//                                 <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
//                                 <p className="text-green-600 font-semibold">{product.price}</p>
//                                 <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
//                                     Add
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Shopgrid;
