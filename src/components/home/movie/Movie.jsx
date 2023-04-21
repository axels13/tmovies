import React, { useEffect, useState } from "react";
import "./movie.css";
import { Link } from "react-router-dom";
import { getMovieVideos } from "../../hook/useFech";

import Modal from "../../modal/Modal";
const Movie = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getMovieVideos(movie.id);
      if (data) {
        setVideos(data);
      }
    };
    fetchVideos();
  }, [movie.id]);
  const handleShowTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <main className="movie__container">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="image"
      />
      <div className="movie__content">
        <div className="movie__desc">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="movie__btn">
            <Link to={`/movies/${movie.id}`}>
              <button className="first__btn">Watch now</button>
            </Link>
            <button className="second__btn" onClick={handleShowTrailer}>
              Watch trailer
            </button>
          </div>
        </div>
        <div className="movie__card-img">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={400}
            alt=""
          />
        </div>
      </div>
      {showTrailer && (
        <Modal video={videos[0]} onClose={() => setShowTrailer(false)} />
      )}
    </main>
  );
};

export default Movie;
