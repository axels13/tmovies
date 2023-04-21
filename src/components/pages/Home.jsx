import React from "react";
import Banner from "../home/banner/Banner";
import Trending from "../home/trending/Trending";
import {
  getMovieList,
  getTopRatedMovies,
  getTopRatedTV,
  getTrendingTV,
} from "../hook/useFech";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending
        title="Trending Movies"
        getData={getMovieList}
        content={"movies"}
      />
      <Trending
        title="Top rated movies"
        getData={getTopRatedMovies}
        content={"movies"}
      />
      <Trending
        title="Trending TV"
        getData={getTrendingTV}
        content={"series"}
      />
      <Trending
        title="Top rated TV"
        getData={getTopRatedTV}
        content={"series"}
      />
    </>
  );
};

export default Home;
