const OfferCard = ({ heading, caashback, code, msg, color }) => {
  return (
    <div>
      <div
        className="border-2 w-96 h-52 rounded-lg m-8 p-8"
        style={color && { backgroundColor: color }}
      >
        <h2 className="font-sans text-2xl font-bold">{heading}</h2>
        {caashback && <h5>Max cashback: {caashback}</h5>}
        {code && <h5>Code: {code}</h5>}
        {msg && <h5>{msg}</h5>}
        <button>Shop Now</button>
        {/* <div>
          <img src=""/>
        </div> */}
      </div>
    </div>
  );
};

export default OfferCard;
