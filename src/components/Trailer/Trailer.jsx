import React, { useEffect, useState } from "react";
import { getMovieVideos } from "../hook/useFech";
import "./Trailer.css";
const Trailer = ({ id }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getMovieVideos(id);
      if (data) {
        setVideos(data);
      }
    };
    fetchVideos();
  }, [id]);

  if (videos.length === 0) {
    return <div>No se encontró ningún video</div>;
  }
  return (
    <div className="video">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${videos[0].key}`}
        title={videos[0].name}
      />
    </div>
  );
};

export default Trailer;
