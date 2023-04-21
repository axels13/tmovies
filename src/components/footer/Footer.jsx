import React from "react";
import "./footer.css";
import logo from "../../assets/tmovie.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} alt="logo" width={60} />
        <span>tMovies</span>
      </div>

      <div className="footer__container">
        <div>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Contacts us</span>
            </li>
            <li>
              <span>Term of services</span>
            </li>
            <li>
              <span>About us</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>Live</span>
            </li>
            <li>
              <span>FAQ</span>
            </li>
            <li>
              <span>Premium</span>
            </li>
            <li>
              <span>Privacy policy</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>You must watch</span>
            </li>
            <li>
              <span>Recent release</span>
            </li>
            <li>
              <span>Top IMDB</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
