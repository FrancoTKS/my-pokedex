import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import { Link } from "react-router-dom";
import "../styles/Evolutions.css";

export default function Evolutions({ list }) {
  const [pokemon, setpokemon] = useState();

  useEffect(() => {
    pokemonbyname(list);
  }, [list]);

  async function pokemonbyname(name) {
    await pokeService.getbyName(name).then((data) => {
      let name = data.name;
      let num = data.id;
      let img = data.sprites.other.dream_world.front_default;
      if (img === null) {
        img = data.sprites.other["official-artwork"].front_default;
      }
      let type = [];
      data.types.forEach((d) => {
        type.push(d.type.name);
      });
      setpokemon(json(name, num, img, type));
    });
  }

  function json(nom, n, ig, t) {
    const poke = {
      name: nom,
      num: n,
      img: ig,
      type: t,
    };
    return poke;
  }

  return (
    <div className="div-dex">
      {pokemon ? (
        <div className="contain-dex">
          <i className="dex-num">N°{pokemon.num}</i>
          <img src={pokemon.img} className="div-img" alt={pokemon.name} />
          <h3 className="dex-name">{pokemon.name}</h3>
          <div className="dex-types">
            <ul>
              {pokemon.type.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div></div>
    </div>
  );
}
