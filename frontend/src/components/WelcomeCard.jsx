const WelcomeCard = () => {
  return (
    <div className="flex bg-gray-100 rounded-lg mx-52 items-center justify-around mt-8">
      <div>
        <img src="https://freshcart-next-js-template.netlify.app/images/about/about-icons-1.svg" />
      </div>
      <div>
        <h1>Welcome to FreshCart</h1>
        <h6>Download the app get free food & $30 off on your first order.</h6>
      </div>
      <div>
        <button>Download FreeCart App</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
