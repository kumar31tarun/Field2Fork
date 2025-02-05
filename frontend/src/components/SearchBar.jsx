import React, { useState } from "react";

const SearchBar = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the items based on the search query
  //   const filteredItems = items.filter((item) =>
  //     item.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  return (
    <div>
      <input
        className="w-96 border-0 outline-0"
        type="text"
        placeholder="Search for products"
        value={searchQuery}
        onChange={handleChange}
        // className="search-input"
      />
      {/* <ul className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul> */}
    </div>
  );
};

export default SearchBar;
