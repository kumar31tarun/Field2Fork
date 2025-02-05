import CategoryCard from "./CategoryCard";
const ShopByCategory = () => {
  return (
    <div className="mx-4">
      <h2 className="font-sans text-2xl font-bold ml-3">Shop by Category</h2>
      <div className="flex flex-wrap  px-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default ShopByCategory;
