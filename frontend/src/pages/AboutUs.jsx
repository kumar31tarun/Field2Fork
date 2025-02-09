// import bgImage from "../assets/About-us.jpg";
// import aboutImg from "../assets/About-uspg.jpg"; 


const AboutUs = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="flex flex-col items-start justify-center bg-cover bg-center pl-16"
        style={{
          backgroundImage: `url('/Aboutusimg/About-us.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "80vh",
        }}
      >
        <h1 className="text-white text-5xl font-bold shadow-2xl shadow-amber-300 font-poppins">
          About Us
        </h1>
      </div>
      <br />
      <h2 className="text-4xl font-bold text-center text-green-700 mb-4 font-lora">
        Green and Organic, just how you like it
      </h2>
      {/* Main Content Section */}
      <div className="bg-white text-gray-800 px-10 py-16">
        {/* Section with Image & Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image with Fixed Size */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src='Aboutusimg/About-uspg.jpg'
              alt="Organic Farming"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-110"
              style={{ width: "600px", height: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed font-poppins text-gray-700">
              At Field2Fork, we believe in a healthier, more sustainable future, and we're here to make it easy for you to enjoy the freshest, most nutritious produce right from the farm. Our mission is to create a direct link between local farmers and consumers, ensuring that you have access to organic vegetables, fruits, and essential farming materials delivered straight to your doorstep.
              We are committed to supporting local farmers by providing them with a platform to showcase their produce and share their harvest with you. By choosing Field2Fork, you're not just buying food, you're supporting small-scale agriculture and promoting eco-friendly practices that protect our planet for future generations.
              Our products are carefully selected, free from harmful chemicals, and grown with the utmost respect for nature. Whether you're looking for fresh greens, seasonal fruits, or organic fertilizers and tools for your own garden, we've got you covered. We prioritize quality and affordability, ensuring you get the best of both worlds.
            </p>
          </div>
        </div>

        {/* Who We Are & What We Offer */}
        <div className="mt-16 text-left md:text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-4 font-lora">Who We Are</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto font-poppins">
            Field2Fork is a digital platform dedicated to transforming agricultural trade by directly 
            connecting farmers (sellers) with consumers (buyers). Our mission is to create a transparent, 
            efficient, and fair marketplace that ensures farmers receive fair prices for their products 
            while buyers get fresh, high-quality produce delivered to their doorstep.
          </p>

          <h2 className="text-3xl font-bold text-amber-500 mt-8 font-lora">Our Vision</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto font-poppins">
            We aim to revolutionize the agricultural industry by leveraging technology to eliminate 
            middlemen, simplify transactions, and provide a seamless buying experience.
          </p>

          <h2 className="text-3xl font-bold text-amber-500 mt-8 font-lora">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Farmers */}
            <div className="p-6 border rounded-lg shadow-lg hover:bg-green-100 transition-colors">
              <h3 className="text-xl font-bold text-green-700">🌱 For Farmers</h3>
              <p className="text-lg font-poppins">
                A digital marketplace to list and manage their crops. Inventory management for easy tracking.
                Fair pricing & direct sales, eliminating unnecessary intermediaries.
              </p>
            </div>

            {/* Buyers */}
            <div className="p-6 border rounded-lg shadow-lg hover:bg-green-100 transition-colors">
              <h3 className="text-xl font-bold text-green-700">🛒 For Buyers</h3>
              <p className="text-lg font-poppins">
                A user-friendly platform to browse and purchase fresh produce. A transparent pricing 
                system that ensures affordability. Secure transactions and seamless doorstep delivery.
              </p>
            </div>

            {/* Administrators */}
            <div className="p-6 border rounded-lg shadow-lg hover:bg-green-100 transition-colors">
              <h3 className="text-xl font-bold text-green-700">🔍 For Administrators</h3>
              <p className="text-lg font-poppins">
                A powerful admin panel for monitoring transactions and generating reports.
                Insights and analytics to ensure smooth platform operations.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-green-700 font-lora">Join Us</h2>
          <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-poppins">
            At Field2Fork, we believe in empowering farmers and delivering quality. 
            Be a part of this agricultural revolution and experience a new way to buy and sell 
            farm-fresh produce!
          </p>
          <h3 className="font-bold mt-4">
            For media inquiries, please contact us at: <a href="mailto:press@field2fork.com" className="text-blue-500">press@field2fork.com</a><br />
            For all other inquiries, visit our <a href="/contact" className="text-blue-300">Contact Us</a> page.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
