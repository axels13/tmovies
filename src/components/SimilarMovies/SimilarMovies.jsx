import { useEffect, useRef, useState } from "react";
import { getSimilarMovies } from "../hook/useFech";
import SimilarCard from "../SimilarCard/SimilarCard";

const SimilarMovies = ({ id }) => {
  const [similar, setSimilar] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const similarRef = useRef(null);
  useEffect(() => {
    const fetchSimilar = async () => {
      const data = await getSimilarMovies(id);
      setSimilar(data);
    };
    fetchSimilar();
  }, [id]);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - similarRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      similarRef.current.scrollLeft = scrollLeft - walk;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [mouseDown, startX, scrollLeft]);
  return (
    <>
      {similar && (
        <div className="similar__container">
          <h3>Similar TV Shows</h3>
          <div
            className="similar__cards"
            ref={similarRef}
            onMouseDown={(e) => {
              setMouseDown(true);
              setStartX(e.pageX - similarRef.current.offsetLeft);
              setScrollLeft(similarRef.current.scrollLeft);
            }}
            onMouseUp={() => setMouseDown(false)}
            onMouseLeave={() => setMouseDown(false)}
          >
            {similar.map((item) => (
              <SimilarCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SimilarMovies;
