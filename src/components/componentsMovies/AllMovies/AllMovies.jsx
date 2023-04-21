import React, { useEffect, useState } from "react";
import "./AllMovies.css";
import { getMovieList, searchMovies } from "../../hook/useFech";
import MovieList from "../../home/movieList/MovieList";
import Search from "../Search/Search";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const contentType = "movies";
  useEffect(() => {
    async function fetchData() {
      const movies = await getMovieList();
      setAllMovies(movies);
    }
    fetchData();
  }, [getMovieList]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <section>
      <Search onSearch={handleSearch} searchData={searchMovies} />
      <main className="allmovies__grid">
        {(searchResults.length > 0 ? searchResults : allMovies).map((list) => (
          <MovieList
            list={list}
            key={list.id}
            id={list.id}
            contentType={contentType}
          />
        ))}
      </main>
    </section>
  );
};

export default AllMovies;
