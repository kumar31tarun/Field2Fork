const AddCard = ({ category, name, rating, price }) => {
  return (
    <div className="border-2 w-96 rounded-lg m-4 p-2">
      <img src="https://freshcart-next-js-template.netlify.app/images/products/product-img-17.jpg" />
      <div className="p-7">
        <h6 className="text-gray-500">{category}</h6>
        <h6>{name}</h6>
        <h6>Rating : {rating}</h6>
        <h6>Price : {price}</h6>
        <button> + Add</button>
      </div>
    </div>
  );
};

export default AddCard;
