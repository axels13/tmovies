import { useEffect, useRef, useState } from "react";

const SimilarCard = ({ item }) => {
  return (
    <div className="similar__card">
      <img
        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        alt={item.title}
      />
      <h4>{item.name}</h4>
    </div>
  );
};

export default SimilarCard;
