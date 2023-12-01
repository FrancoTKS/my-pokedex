import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import Evolutions from "./Evolutions";
import left from "../images/icons/Icons-Ocultos/arrow-left-double-fill.png";
import right from "../images/icons/Icons-Ocultos/arrow-right-double-fill.png";
import float from "../images/pikachu_float.png";
import "../styles/Card.css";

export default function Card() {
  const [evolves, setevolves] = useState([]);
  const [id, setid] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const evolutionData = await AllEvolutions(id);
      setevolves(evolutionData);
    }
    fetchData();
  }, [id]);

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
      <div className="div-float">
        <img src={float} className="img-float"/>
      </div>
    </div>
  );
}
