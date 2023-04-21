import React, { useEffect, useState } from "react";

import { getMovieList } from "../../hook/useFech";
import Slider from "react-slick";
import Movie from "../movie/Movie";
const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieList = await getMovieList();
      setMovies(movieList.slice(0, 4));
    }
    fetchData();
  }, []);

  console.log(movies);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
