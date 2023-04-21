import React, { useState } from "react";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="nav__container">
        <div className="logo">
          <img src={logo} alt="logo" width={50} />{" "}
          <span className="logo__title">tMovies</span>
        </div>
        <div>
          <ul className={`nav_menu ${isOpen ? "nav_menu open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/series">TV Series</Link>
            </li>
          </ul>

          <button className="menu" onClick={handleMenuClick}>
            {isOpen ? (
              <i className="ri-menu-line"></i>
            ) : (
              <i className="ri-close-fill"></i>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
