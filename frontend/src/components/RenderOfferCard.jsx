import OfferCard from "./OfferCard";
const RenderOfferCard = () => {
  return (
    <div className="flex pl-14">
      <OfferCard
        color={"Lavender"}
        heading="10% cashback on
personal care"
        caashback="$12"
        code="CARE12"
      />
      <OfferCard
        color={"LemonChiffon"}
        heading="Say yes to
season's fresh"
        caashback=""
        code=""
        msg="Refresh your day
the fruity way"
      />
      <OfferCard
        color={"LightCyan"}
        heading="When in doubt,
eat ice cream"
        caashback=""
        code=""
        msg="Enjoy a scoop of
summer today"
      />
    </div>
  );
};

export default RenderOfferCard;
