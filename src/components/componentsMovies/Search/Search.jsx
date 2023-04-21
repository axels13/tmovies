import React, { useEffect, useState } from "react";
import "./search.css";
import { searchMovies } from "../../hook/useFech";
const Search = ({ onSearch, searchData }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchSearch() {
      const searchMovie = await searchData(search);
      onSearch(searchMovie);
    }
    fetchSearch();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <button className="search_btn">Search</button>
    </form>
  );
};

export default Search;
