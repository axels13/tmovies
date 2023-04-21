import { useEffect, useRef, useState } from "react";
import { getSimilarTV } from "../hook/useFech";
import SimilarCard from "../SimilarCard/SimilarCard";
import "./SimilarSeries.css";
const SimilarSeries = ({ id }) => {
  const [similar, setSimilar] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - cardRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      cardRef.current.scrollLeft = scrollLeft - walk;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [mouseDown, startX, scrollLeft]);

  useEffect(() => {
    const fetchSimilar = async () => {
      const data = await getSimilarTV(id);
      setSimilar(data);
    };
    fetchSimilar();
  }, [id]);

  return (
    <>
      {similar && (
        <div className="similar__container">
          <h3>Similar TV Shows:</h3>
          <div
            className="similar__cards"
            ref={cardRef}
            onMouseDown={(e) => {
              setMouseDown(true);
              setStartX(e.pageX - cardRef.current.offsetLeft);
              setScrollLeft(cardRef.current.scrollLeft);
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

export default SimilarSeries;
