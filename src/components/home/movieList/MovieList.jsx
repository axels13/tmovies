import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
const MovieList = ({ list, contentType }) => {
  const basePath = contentType === "movies" ? "/movies/" : "/series/";
  return (
    <Link to={`${basePath}${list.id}`}>
      <article className="movie-list">
        <img
          src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
          width={240}
        ></img>
        <h2 className="movie__title">{list.title}</h2>
      </article>
    </Link>
  );
};

export default MovieList;
