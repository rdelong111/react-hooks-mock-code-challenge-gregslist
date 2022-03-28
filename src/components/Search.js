import React, {useState} from "react";

function Search({onSearchSubmit}) {
  const [searchText, changeText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchText);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => changeText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
