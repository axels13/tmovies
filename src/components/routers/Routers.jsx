import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";
import MovieDetails from "../MovieDetails/MovieDetails";
import SeriesDetails from "../SeriesDetails/SeriesDetails";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
      </Routes>
    </>
  );
};

export default Routers;
