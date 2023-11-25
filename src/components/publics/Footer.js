import { React } from "react";
import foto from "../images/pokebola.png";
import logo from "../images/logo_nintendo.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import logCss from "../images/icons/Icons-Ocultos/Credits_to/css3-line.png";
import logGit from "../images/icons/Icons-Ocultos/Credits_to/github-fill.png";
import logHtml from "../images/icons/Icons-Ocultos/Credits_to/html5-line.png";
import logJS from "../images/icons/Icons-Ocultos/Credits_to/javascript-line.png";
import logGpt from "../images/icons/Icons-Ocultos/Credits_to/openai-fill.png";
import logReact from "../images/icons/Icons-Ocultos/Credits_to/reactjs-line.png";
import logRemixIcon from "../images/icons/Icons-Ocultos/Credits_to/remixicon-fill.png";

export const Footer = () => {
  const years = new Date().getFullYear();
  const compania = "Compañia ficticia 2.0";
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>
            © {years} {compania}, Inc.
            <img src={logo} alt="imagen" className="logo-nintendo" />
          </h4>
          <img src={foto} alt="Imagen" className="footer-image" />

          <div className="credits_to">
            <Link
              to="https://developer.mozilla.org/es/docs/Web/CSS"
              className="links"
              target="_blank"
            >
              <img src={logCss} alt="Imagen" className="img-footer-items-css" />
            </Link>

            <Link
              to="https://github.com/FrancoTKS/my-pokedex"
              className="links"
              target="_blank"
            >
              <img src={logGit} alt="Imagen" className="img-footer-items-git" />
            </Link>

            <Link
              to="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics"
              className="links"
              target="_blank"
            >
              <img src={logHtml} alt="Imagen" className="img-footer-items-ht" />
            </Link>

            <Link
              to="https://developer.mozilla.org/es/docs/Web/JavaScript"
              className="links"
              target="_blank"
            >
              <img src={logJS} alt="Imagen" className="img-footer-items-js" />
            </Link>

            <Link
              to="https://chat.openai.com/auth/login"
              className="links"
              target="_blank"
            >
              <img src={logGpt} alt="Imagen" className="img-footer-items-gpt" />
            </Link>

            <Link to="https://es.react.dev/" className="links" target="_blank">
              <img
                src={logReact}
                alt="Imagen"
                className="img-footer-items-react"
              />
            </Link>

            <Link to="https://remixicon.com/" className="links" target="_blank">
              <img
                src={logRemixIcon}
                alt="Imagen"
                className="img-footer-items-rmI"
              />
            </Link>
          </div>
        </div>
        <div className="box-container">
          <ul className="box-row">
            <li className="box-item">
              <button className="romboid-button">
                <Link to="/pokedex" className="links">
                  <span className="btn-font">Pokedex</span>
                </Link>
              </button>
            </li>
            <li className="box-item">
              <button className="btn-mood-footer">
                <Link to="/contact" className="links">
                  <span className="btn-font">Contact Us</span>
                </Link>
              </button>
            </li>
          </ul>
          <ul className="box-row">
            <li className="box-item">
              <button className="btn-mood-footer">
                <Link to="/evolutions" className="links">
                  <span className="btn-font">Evolution</span>
                </Link>
              </button>
            </li>
            <li className="box-item">
              <button className="romboid-button">
                <Link to="/my-pokedex" className="links">
                  <span className="btn-font">Home</span>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
