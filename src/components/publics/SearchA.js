import React, { useEffect, useState } from "react";
import pokeService from "../services/poke.service";
import "../styles/Searchs.css";

export default function SearchA(props) {
  const [tb, settb] = useState();
  const handleButtonClick = (event) => {
    const type = event.target.value;
    props.onButtonClick(type);
  };

  useEffect(() => {
    fetchtypes();
  }, []);

  async function fetchtypes() {
    try {
      let response = await pokeService.getAlltypes();
      let data = response.results;
      let tp = data.map((type) => type.name);
      settb(tabletypes2(tp));
    } catch (error) {
      console.error(error);
    }
  }

  function tabletypes2(data) {
    let table = (
      <table>
        <tbody>
          {data.map((lista, index) => (
            <tr key={index}>
              <td>
                <button
                  className={`btn-table-${lista}`}
                  value={lista}
                  onClick={handleButtonClick}
                >
                  <font className="font-detail">{lista}</font>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return table;
  }

  return <div className="div-search">{tb}</div>;
}
