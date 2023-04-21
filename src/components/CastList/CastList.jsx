import React, { useEffect, useState } from "react";
import "./CastList.css";
import { getMovieCast } from "../hook/useFech";
const CastList = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await getMovieCast(id);
      if (castData) {
        setCast(castData);
      }
    };
    fetchCast();
  }, [id]);

  const filteredCast = cast.filter((actor) => actor.profile_path);
  return (
    <div className="castList__container">
      {filteredCast.splice(0, 5).map((actor) => (
        <div key={actor.id} className="castList__actors__card">
          <img
            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
            alt=""
            width={100}
            className="clastList__image"
          />
          <span className="castList__name">{actor.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CastList;
