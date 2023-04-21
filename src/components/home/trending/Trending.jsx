import React, { useEffect, useRef, useState } from "react";
import "./Trending.css";
import MovieList from "../movieList/MovieList";

const Trending = ({ title, getData, content }) => {
  const [lists, setLists] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trendingRef = useRef(null);
  const contentType = content;

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - trendingRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trendingRef.current.scrollLeft = scrollLeft - walk;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [mouseDown, startX, scrollLeft]);

  useEffect(() => {
    async function fetchData() {
      const movieList = await getData();
      setLists(movieList);
    }
    fetchData();
  }, [getData]);
  console.log(lists);
  return (
    <>
      {" "}
      <h2 className="title">{title}</h2>
      <div
        className="trending"
        ref={trendingRef}
        onMouseDown={(e) => {
          setMouseDown(true);
          setStartX(e.pageX - trendingRef.current.offsetLeft);
          setScrollLeft(trendingRef.current.scrollLeft);
        }}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
      >
        {lists.map((list) => (
          <MovieList list={list} key={list.id} contentType={contentType} />
        ))}
      </div>
    </>
  );
};

export default Trending;
