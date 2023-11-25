import React, { useEffect, useState } from "react";
import pokeService from "../services/poke.service";
import "../styles/Searchs.css";

export default function SearchA(props) {
  const [tb, settb] = useState();

  useEffect(() => {
    fetchtypes();
  }, []);

  async function fetchtypes() {
    try {
      let response = await pokeService.getAlltypes();
      let data = response.results;
      let tp = data.map((type) => type.name);
      settb(divtypes2(tp));
    } catch (error) {
      console.error(error);
    }
  }

  function divtypes2(data) {
    let div = (
      <div className="div-search">
        {data.map((lista, index) => (
          <button
            key={index}
            className={`btn-table-${lista}`}
            value={lista}
            onClick={(e) => props.onButtonClick(e, lista)}
          >
            {lista}
          </button>
        ))}
      </div>
    );
    return div;
  }

  return <div className="container-types-search">
    {tb}
    </div>;
}
