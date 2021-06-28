//swag
import "./App.css";
import { Button } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//hooks
import { useState } from "react";
import axios from "axios";
//components
// import { TextInput } from "./TextInput";
import Basic from './Formik'
//main
function App() {
  const [colorList, colorListSet] = useState([]);
  const [text, textSet] = useState("");
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
      <header className="App-header">
        <Basic
          color={color}
          colorSet={colorSet}
          textSet={textSet}
          addToList={addColorToList}
          colorList={colorList}
        />
      </header>
      <div>
        click for a hex...
        <Button
          style={{
            background: "lightgrey",
            color: `#${color}`,
            fontStyle: "bold",
          }}
          onClick={() => handleClick()}
        >
          {color}
        </Button>
        <DragDropContext>
          <Droppable droppableId="hpp">
            {(provided) => (
              <ul
                className="App"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {colorList.map((i, index) => (
                  <Draggable key={i.id} draggableId={`${i.id}`} index={index}>
                    {(provided) => (
                      <li
                        style={{ backgroundColor: `#${i.color}` }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {" "}
                        {i.color}{" "}
                      </li>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
