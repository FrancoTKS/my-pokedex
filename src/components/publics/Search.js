import React, { useEffect, useState } from "react";
import pokeService from "../services/poke.service";
import Dex from "./Dex";
import SearchA from "./SearchA";
import "../styles/Searchs.css";
import togepi from "../images/togepi.png";
export default function Search() {
  const [pokemon, setpokemon] = useState({});
  const [lista, setlista] = useState([]);

  async function fetchPokemon() {
    const numID = document.querySelector("#numID").value;
    pokeService.getbyId(numID).then((data) => {
      setpokemon(data);
    });
    console.log(pokemon);
    console.log("fetchpokemon");
  }

  async function fetchtypes(type) {
    // const type = document.querySelector("#type").value;
    if (!type) {
      console.log(type);
      console.log("no ingreso ningun dato aun");
    } else {
      try {
        let data = await pokeService.getTypes(type);
        setlista(data.pokemon.map((pokemon) => pokemon.pokemon.name));
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    fetchtypes();
  }, []);

  const handleButtonClick = (buttonValue) => {
    fetchtypes(buttonValue);
    console.log(buttonValue);
  };

  const cardlist = lista.map((name, index) => <Dex list={name} key={index} />);

  return (
    <div>
      <input id="numID" type="number" placeholder="Search by n°pokedex" />
      <button onClick={fetchPokemon} className="btn-search-by-id">
        Buscar
      </button>
      <div className="types-pokemon">
          <SearchA onButtonClick={handleButtonClick} />
          <div className="div-img-search">
            <img src={togepi} alt="togepi" className="img-table-search" />
          </div>
      </div>
      <div className="grid-types">{cardlist}</div>
    </div>
  );
}
