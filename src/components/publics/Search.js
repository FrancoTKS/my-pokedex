import React, { useEffect, useState } from "react";
import SearchA from "./SearchA";
import "../styles/Searchs.css";
import togepi from "../images/togepi.png";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // async function fetchPokemon(n) {
  //   try {
  //     pokeService.getbyName(n).then((data) => {
  //       setpokeid(data.id);
  //     });
  //   } catch (error) {
  //     alert("Ninguna coincidencia encontrada");
  //   }
  // }  esta parte no la estaria necesitanto ya que no todo el mundo se sabe los nombres
  // de los pokemones y ademas de que hay que ponerlos correctamente en idioma ingles
  // lo mismo por si uno queria buscar por el typo
  // y para no tirar errores ni interrumpir el codigo lo dejamos asi

  const handleButtonClick = async (e, type) => {
    e.preventDefault();
    window.location.href = `/type/${type}`;
  };

  return (
    <div>
      <input
        id="numID"
        type="number"
        placeholder="Search by n°pokedex"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Link to={`/details/${searchValue}`} className="btn-link">
        <button className="btn-search-by-id"> Buscar</button>
      </Link>

      <div className="types-pokemon">
        <SearchA onButtonClick={handleButtonClick} />
        <div className="div-img-search">
          <img src={togepi} alt="togepi" className="img-table-search" />
        </div>
      </div>
    </div>
  );
}
