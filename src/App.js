//swag
import "./App.css";
import { Button } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//hooks
import { useState, useEffect } from "react";
import axios from "axios";
//components

//main
function App() {
  const [colorList, colorListSet] = useState([]);
  // const [text, textSet] = useState("");
  // const [colorText, colorTextSet] = useState("");
  const [color, colorSet] = useState([]);
  const url = `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`;

  //api call
  const getEm = () => {
    axios
      .get(url)
      .then((rez) => {
        console.log(rez);
        colorSet(rez.data.new_color);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(color);

  //add color to list
  const addColorToList = (color) => {
    let copy = [...colorList];
    copy = [...copy, { id: colorList.length + 1, color, complete: false }];
    colorListSet(copy);
    console.log(colorList);
  };
  console.log(colorList);

  //call em up on button
  const handleClick = () => {
    getEm();
    addColorToList(color);
  };

  //display
  return (
    <div className="App">
      <header className="App-header">axios api</header>
      <Button style={{ color: `#${color}` }} onClick={() => handleClick()}>
        {color}
      </Button>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {colorList.map((i, index) => (
                <Draggable key={i.id} draggableId={`a`} index={index}>
                  {(provided) => (
                    <p
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {" "}
                      {i.color}{" "}
                    </p>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
