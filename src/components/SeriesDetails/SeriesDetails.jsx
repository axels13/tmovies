import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTVDetails } from "../hook/useFech";

import CastList from "../CastList/CastList";
import Trailer from "../Trailer/Trailer";
import image from "../../assets/footer-bg.jpg";
import SimilarSeries from "../SimilarSeries/SimilarSeries";
const SeriesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      let data = await getTVDetails(id);
      if (data) {
        setDetails(data);
      }
    };
    fetchDetails();
  }, [id]);

  const displayGenres = () => {
    return (
      details.genres &&
      details.genres.map((genre) => (
        <div className="details__genres" key={genre.id}>
          <span key={genre.id}>{genre.name}</span>
        </div>
      ))
    );
  };
  return (
    <>
      {details && (
        <section className="details">
          <div className="details__banner">
            {details.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
                alt=""
              />
            ) : (
              <img src={image} alt="banner" />
            )}
          </div>

          <div className="details__container">
            <div>
              {details.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                  width={250}
                  alt=""
                  className="details__image"
                />
              ) : (
                <div className="no__poster">
                  <p>No poster path available</p>
                </div>
              )}
            </div>
            <div className="details__card">
              <h1 className="details__title">{details.title}</h1>
              <div className="details__container__genres">
                {displayGenres()}
              </div>
              <p className="details_desc">
                {" "}
                {details.overview ? details.overview : "No overview"}
              </p>
              <div className="cast">
                <div>
                  <h3 className="cast__title">Casts</h3>
                </div>

                <CastList id={id} />
              </div>
              <div>
                <div>
                  <Trailer id={id} />
                </div>
              </div>
              <SimilarSeries id={id} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SeriesDetails;
