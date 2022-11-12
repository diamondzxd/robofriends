import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pad2">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      ></input>
    </div>
  );
};

export default SearchBox;
