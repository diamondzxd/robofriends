import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pad2">
      <input
        autoFocus
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        style={{ marginBottom: "10px" }}
      ></input>
    </div>
  );
};

export default SearchBox;
