import React, { useState, useEffect } from "react";
import pokeService from "../services/poke.service";
import flech from "../images/icons/Icons-Ocultos/send-plane-2-line-black.png";
import Dex from "./Dex";

export default function Cards() {
  const [page, setpage] = useState(0);
  const [lista, setlista] = useState([]);
  useEffect(() => {
    fetchPage();
  }, [page]);

  async function fetchPage() {
    let data = await pokeService.getpages(page);
    let m = data.results;
    setlista(m.map((d) => d.name));
  }

  function Previous() {
    if (page >= 20) {
      setpage(page - 20);
    } else {
      setpage(0);
    }
  }

  function Next() {
    setpage(page + 20);
  }
  const cardlist = lista.map((name, index) => <Dex list={name} key={index} />);
  return (
    <div>
      <div className="dex-grid">{cardlist}</div>
      <div className="div-btn-cards">
        <div className="btn-rombo-previous">
          <button onClick={Previous} className="rombo-button">
          <img src={flech} className="rombo-previous" />
          </button>
        </div>
        <div className="btn-rombo-next">
          <button onClick={Next} className="rombo-button">
          <img src={flech} className="rombo-next" />
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /*<div className="right-btn">
        <button onClick={Next} className="circle-button">
          <img src={right} className="img-btn" />
        </button>
      </div> */
}
