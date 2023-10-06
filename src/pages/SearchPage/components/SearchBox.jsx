// stylesheet
import "../style/SearchBox.css";

// images
import GoogleMap from "../images/GoogleMap.svg";

const SearchBox = ({search, setSearch,handleSearch}) => {
  return (
    <div className="search_box">
      <div className="inner_search">
        <img src={GoogleMap} alt="image" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Nigeria" />
      </div>
      <button onClick={handleSearch}>Find School</button>
    </div>
  );
};

export default SearchBox;
 