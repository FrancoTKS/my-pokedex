import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import { useParams } from "react-router-dom";
import Dex from "./Dex";

export default function Types() {
  const [lista, setlista] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    try {
      pokeService.getTypes(name).then((data) => {
        setlista(data.pokemon.map((pokemon) => pokemon.pokemon.name));
      });
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  const cardlist = lista.map((name, index) => <Dex list={name} key={index} />);
  return <div className="grid-types">{cardlist}</div>;
}
