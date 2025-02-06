// import homepageImg from "../assets/homepage1.jpg"; 

const WelcomeCard = () => {
  return (
    <div
      className="flex flex-col items-start justify-center h-screen bg-cover bg-center pl-16"
      style={{
        backgroundImage: `url(/Homepage1.jpg)`,
        backgroundSize: "cover",    
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        width: "100vw", 
        height: "100vh", 
      }}
    >
      {/* Heading */}
      <h1 className="text-7xl font-bold text-black">
        <span className="text-green-600 block mt-5">Organic Foods</span>
        <span className="text-black block mt-2">at your Doorsteps</span>
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mt-4 max-w-md">
        Savor fresh, organic produce delivered right to your home with ease.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 self-start">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
          START SHOPPING
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition">
          JOIN NOW
        </button>
      </div>

      {/* Statistics */}
      <div className="mt-10 flex gap-12 text-black text-xl font-semibold self-start">
        <div>
          <h2 className="text-3xl text-gray-400">14k+</h2>
          <p className="text-gray-700 text-sm">PRODUCT VARIETIES</p>
        </div>
        <div>
          <h2 className="text-3xl text-gray-400">50k+</h2>
          <p className="text-gray-700 text-sm">HAPPY CUSTOMERS</p>
        </div>
        <div>
          <h2 className="text-3xl text-gray-400">10+</h2>
          <p className="text-gray-700 text-sm">FARM LOCATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
