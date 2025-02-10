import React from 'react';

const CategoryCard = () => {
  const categories = [
    { name: 'Vegetables', image: '/category/freshveges.jpg' },
    { name: 'Fruits', image: '/category/fruits1.jpg' },
    { name: 'Nuts & Seeds', image: '/category/Nuts-seeds.jpg' },
    { name: 'Dairy Products', image: '/category/dairyproducts.jpg' },
    { name: 'Grains', image: '/category/Grains.jpg' },
    { name: 'Eggs', image: '/category/Eggs.jpg' },
    { name: 'Herbs & Spices', image: '/category/herbs-spices.jpg' },
    { name: 'Honey & Sweetners', image: '/category/honey-other.jpg' },
    { name: 'Oils Condiments', image: '/category/oils.jpg' },
    { name: 'Seafood', image: '/category/seafood.jpg' },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold text-black">Featured Categories</h1>
        <p className="text-lg text-gray-700 mt-2">
          Explore a variety of categories to make your shopping easier.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold">{category.name}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
