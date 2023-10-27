import React, { useEffect, useState } from "react";
import pokeService from "../services/poke.service";
import Dex from "./Dex";
import "../styles/Searchs.css";
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

  async function fetchtypes() {
    const type = document.querySelector("#type").value;
    if (!type) {
      console.log("no ingreso ningun dato aun");
    } else {
      try {
        let data = await pokeService.getAlltypes(type);
        setlista(data.pokemon.map((pokemon) => pokemon.pokemon.name));
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    fetchtypes();
  }, []);

  const cardlist = lista.map((name, index) => <Dex list={name} key={index} />);

  return (
    <div>
      <input id="type" type="text" placeholder="Search by Type" />
      <button onClick={fetchtypes}>Buscar</button>
      <input id="numID" type="number" placeholder="Search by n°pokedex" />
      <button onClick={fetchPokemon} className="btn-search-by-id">
        Buscar
      </button>
      <div className="grid-types" >
      {cardlist}
      </div>
    </div>
  );
}
{
  /* <Link to={`/details/${pokemon.num}`} className="btn-link">
               <button> Details</button>
              </Link>*/
}
