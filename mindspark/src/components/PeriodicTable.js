import React from "react";
import data from "../PeriodicTableJSON.json"
import "../CSS/PeriodicTable.css";
import { Link } from "react-router-dom";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};


const PeriodicTable = () => {
  
  const getElement=(element)=>{
    localStorage.clear();
    localStorage.setItem({
      el:element
    })
  }

  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <Link
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
          }}
          to="/element"
          onClick={getElement(element)}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </Link>
      ))}
    </div>
  );
};

export default PeriodicTable;
