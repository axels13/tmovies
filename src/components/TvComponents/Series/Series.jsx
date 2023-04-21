import React, { useEffect, useState } from "react";
import MovieList from "../../home/movieList/MovieList";
import { getTrendingTV, searchMovies } from "../../hook/useFech";
import Search from "../../componentsMovies/Search/Search";
import "./Series.css";
const Series = () => {
  const [allSeries, setAllSeries] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const contetType = "series";
  useEffect(() => {
    async function fetchData() {
      const series = await getTrendingTV();
      setAllSeries(series);
    }
    fetchData(getTrendingTV);
  }, []);

  console.log(allSeries);
  const handleSearch = (results) => {
    setSearchData(results);
  };

  return (
    <section>
      <Search onSearch={handleSearch} searchData={searchMovies} />
      <main className="allmovies__grid">
        {allSeries.map((list) => (
          <MovieList
            list={list}
            key={list.id}
            id={list.id}
            contentType={contetType}
          />
        ))}
      </main>
    </section>
  );
};

export default Series;
