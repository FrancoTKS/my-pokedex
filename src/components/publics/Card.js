import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import { Link, useLocation, useParams } from "react-router-dom";
import Dex from "./Dex";
import "../styles/Card.css";
import Evolutions from "./Evolutions";
import left from "../images/icons/Icons-Ocultos/arrow-left-double-fill.png";
import right from "../images/icons/Icons-Ocultos/arrow-right-double-fill.png";
export default function Card() {
  const [pokemon, setpokemon] = useState();
  const [evo, setevo] = useState([]);
  const [evolves, setevolves] = useState([]);
  const [id, setid] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const evolutionData = await AllEvolutions(id);
      setevolves(evolutionData);
    }
    fetchData();
  }, [id]);

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
        setpokemon(jsonStat(name, num, img, type, stat));
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function pokemonbyEvo_Data(name) {
    try {
      const data = await pokeService.getbyName(name);
      const n = data.name;
      const num = data.id;
      const img = data.sprites.other["official-artwork"].front_default;
      let type = [];
      data.types.forEach((d) => {
        type.push(d.type.name);
      });
      return n, num, img, type;
    } catch (error) {
      console.log(error);
    }
  }

  async function AllEvolutions(id) {
    try {
      const data = await pokeService.getEvolution(id);
      const evo1 = data.chain.species.name;
      const lv = [];
      lv.push(evo1);

      if (data.chain.evolves_to.length !== 0) {
        const evo2 = data.chain.evolves_to[0].species.name;
        lv.push(evo2);

        if (data.chain.evolves_to[0].evolves_to.length !== 0) {
          const evo3 = data.chain.evolves_to[0].evolves_to[0].species.name;
          lv.push(evo3);
        }
      }

      return lv;
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

  function Previous() {
    if (id >= 2) {
      setid(id - 1);
    } else {
      setid(1);
    }
  }

  function Next() {
    setid(id + 1);
  }

  const cardlist = evolves.map((evolution, index) => (
    <Evolutions list={evolution} key={index} />
  ));
  return (
    <div className="details">
      <div className="left-btn">
        <button className="circle-button" onClick={Previous}>
          <img src={left} className="img-btn" />
        </button>
      </div>
      {cardlist}
      <div className="right-btn">
        <button onClick={Next} className="circle-button">
          <img src={right} className="img-btn" />
        </button>
      </div>
    </div>
  );
}
