import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"

const BoxList = () => {
  //  boxes : [{color, width, height}]
  const [boxes, setBoxes] = useState([])
  const addBox = (newBox) => {
    setBoxes([...boxes,newBox])
  };
  const removeBox = (id) =>{
    setBoxes(boxes.filter( b =>{
        return b !== boxes[id]
    }))
  }

  return (
    <div className="BoxList">
        <NewBoxForm addBox={addBox}/>
        <div className="BoxList-Container">
            {boxes.map((b,idx) => <Box info={b} id={idx} key={idx} removeBox={removeBox}/>)}
        </div>
        
    </div>
  )
};

export default BoxList;