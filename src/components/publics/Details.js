import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import { Link, useLocation, useParams } from "react-router-dom";
import ladderPoke from "../images/ladder_poke.png";
import "../styles/Details.css";

export default function Details() {
  const [pokemon, setpokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    try {
      pokeService.getbyId(id).then((data) => {
        let name = data.name;
        let num = data.id;
        let img = data.sprites.other["official-artwork"].front_default;
        let type = [];
        data.types.forEach((d) => {
          type.push(d.type.name);
        });
        let stat = [];
        data.stats.forEach((d) => {
          const baseStat = d.base_stat;
          const statName = d.stat.name;
          stat.push({ name_stats: statName, base_stats: baseStat });
        });
        setpokemon(jsonStat(name, num, img, type, stat));
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(pokemon);

  useEffect(() => {
    if (pokemon) {
      table2(pokemon.stats);
    }
  }, [pokemon]);

  async function pokemonbyid_Stats(id) {
    try {
      await pokeService.getbyId(id).then((data) => {
        let name = data.name;
        let num = data.id;
        let img = data.sprites.other["official-artwork"].front_default;
        let type = [];
        data.types.forEach((d) => {
          type.push(d.type.name);
        });
        let stat = [];
        data.stats.forEach((d) => {
          const baseStat = d.base_stat;
          const statName = d.stat.name;
          stat.push({ name_stats: statName, base_stats: baseStat });
        });
        return jsonStat(name, num, img, type, stat);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function jsonStat(nom, n, ig, t, s) {
    const poke = {
      name: nom,
      num: n,
      img: ig,
      type: t,
      stats: s,
    };
    return poke;
  }

  function table2(det) {
    let table = `
    <table>
    <thead>
      <tr>
        <th>Statistics</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
    `;
    
    det.forEach((lista) => {
      table += `
        <tr>
          <td>${lista.name_stats}</td>
          <td>${lista.base_stats}</td>
        </tr>
      `;
    });
  
    table += `</tbody></table>`;
    
    document.querySelector(".div-table").innerHTML = table;
  }

  return (
    <div>
      {pokemon ? (
        <div className="card-details">
          <h2 className="num-pokedex">N°{pokemon.num}</h2>
          <h1 className="name-pokemon">{pokemon.name}</h1>
          <div className="div-img-details">
            <img src={pokemon.img} className="poke-img" alt="image pokemon" />
          </div>
          <div className="div-ladder">
            <img src={ladderPoke} className="ladder-img" alt="ladder" />
          </div>
          <div className="div-type">
            {pokemon.type.map((type, index) => (
              <h2 className="type-poke" key={index}>
                {type}
              </h2>
            ))}
          </div>
          <h2 className="type-pokemon">Type</h2>

          <div className="div-table">

          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}