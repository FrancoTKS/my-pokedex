import { React } from "react";
import foto from "../images/pokebola.png";
import logo from "../images/logo_nintendo.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  const years = new Date().getFullYear();
  const compania = "Compañia ficticia 2.0";
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <font>
            © {years} {compania}, Inc.
            <img src={logo} alt="imagen" className="logo-nintendo" />
          </font>
          <img src={foto} alt="Imagen" className="footer-image" />
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
            <button className="btn-mood-footer" >
            <Link to="/contact" className="links">
                  <span className="btn-font">Contact Us</span>
                </Link>
              </button>
            </li>
          </ul>
          <ul className="box-row">
            <li className="box-item">
              <button className="btn-mood-footer" >
              <Link to="/evolutions" className="links">
                  <span className="btn-font">Evolution</span>
                </Link>
              </button>
            </li>
            <li className="box-item">
              <button className="romboid-button">
                <Link to="/home" className="links">
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
