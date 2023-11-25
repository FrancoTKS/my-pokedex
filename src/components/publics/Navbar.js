import React, { useState, useEffect } from "react";
import DarkMoon from "../images/icons/Icons-Ocultos/moon-fill.png";
import LightMoon from "../images/icons/Icons-Ocultos/sun-line.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logHome from "../images/icons/Icons-Ocultos/home-gear-line.png";
import logMail from "../images/icons/Icons-Ocultos/mail-send-line.png";
import logStonk from "../images/icons/Icons-Ocultos/line-chart-fill.png";
import logPokedex from "../images/icons/pokedex.png";
import logSearch from "../images/icons/Icons-Ocultos/menu-search-line-dark.png";

export default function Navbar() {
  const [mod, setmod] = useState(true);
  useEffect(() => {
    const btn_theme = document.querySelector("#btn-mood");
    return () => {
      if (btn_theme) {
        btn_theme.addEventListener("click", function () {
          document.body.classList.toggle("dark");
        });
      }
    };
  }, []);
  return (
    <div className="div-img-banner">
      <div className="div-header">
        <div className="div-navbar">
          <nav>
            <ul className="ul-navbar">
              <li>
                <Link to="/my-pokedex" className="links">
                  Home
                  <img
                    src={logHome}
                    className="img-navbar-items-home"
                    alt="home"
                  />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="links">
                  Contact Us
                  <img
                    src={logMail}
                    className="img-navbar-items-mail"
                    alt="mail"
                  />
                </Link>
              </li>
              <li>
                <Link to="/pokedex" className="links">
                  Pokedex
                  <img
                    src={logPokedex}
                    className="img-navbar-items-pokedex"
                    alt="pokedex"
                  />
                </Link>
              </li>
              <li>
                <Link to="/evolutions" className="links">
                  Evolutions
                  <img
                    src={logStonk}
                    className="img-navbar-items-stonks"
                    alt="stonk"
                  />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="div-buttons">
            <button className="btn-mood">
              <div className="position-absolute start-0 top-50 translate-middle-y">
                <Link to="/search" className="links">
                  <img src={logSearch} alt="theme" className="search" />
                </Link>
              </div>
            </button>
            <button className="btn-mood" id="btn-mood">
              <div
                className="position-absolute start-0 top-50 translate-middle-y"
                onClick={() => setmod(!mod)}
              >
                {mod ? (
                  <img src={LightMoon} alt="theme" className="mood" />
                ) : (
                  <img src={DarkMoon} alt="theme" className="mood" />
                )}
              </div>
            </button>
            <button type="button" className="romboid-button">
              <Link to="/login" className="links">
                <span className="btn-font">
                  login
                  <i
                    className="fa-solid fa-users-viewfinder img-navbar-items-login"
                  ></i>
                </span>
              </Link>
            </button>
            <button type="button" className="romboid-button">
              <Link to="/register" className="links">
                <span className="btn-font">
                  Sign-up
                  <i
                    className="fa-regular fa-address-card img-navbar-items-sign"
                  ></i>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
