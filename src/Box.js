import React from "react";
import "./Box.css";

const Box = ({ info, id, removeBox }) => (
  <div className="Box"
    aria-label="box"
    style={{
      backgroundColor: info.color,
      width: info.width + "px",
      height: info.height + "px",
    }}
  >
    <button onClick={() => removeBox(id)}>X</button>
  </div>
  
);

export default Box;
