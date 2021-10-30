import React from "react";
import data from "../PeriodicTableJSON.json"
import "../CSS/PeriodicTable.css";

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
  return (
    <div className="periodic-page">
      <h1 className="py-5">Periodic Table of Elements</h1>
      <div className="container my-5 ">
        <div className="periodic-table my-5">

          {data.elements.map((element) => (
            <div
              className="element"
              key={element.name}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                borderColor: colorMap[element.category],
              }}
            >
              <strong>{element.symbol}</strong>
              <small className="number">{element.number}</small>
              <small className="name">{element.name}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
