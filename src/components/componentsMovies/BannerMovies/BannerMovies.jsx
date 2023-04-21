import React from "react";
import "./BannerMovies.css";
import bannerimg from "../../../assets/footer-bg.jpg";
const BannerMovies = () => {
  return (
    <section className="banner-movies__container">
      <img src={bannerimg} alt="" className="banner-movies" />
      <h1 style={{ textAlign: "center" }}>Movies</h1>
    </section>
  );
};

export default BannerMovies;
