import "../css/search.css";

const Search = () => {
  return (
    <div id="search">
      <label for="search-bar">
        <i id="search-icon"></i>
      </label>
      <input id="search-bar" type="text" placeholder="Search Reddit"></input>
    </div>
  );
};

export default Search;
