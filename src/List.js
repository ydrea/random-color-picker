import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";

const List = ({ color }) => {

  return <div>color

      { 
    Object.keys(color).map((item, i) => (
        <li key={i}>
            <span>{ color[item].new_color }</span>
        </li>
    ))
}  
  </div>;
};
export default List;
