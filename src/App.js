//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState } from "react";
import axios from "axios";
//components
import { TextInput } from "./TextInput";
//main
function App() {
  const [colorList, colorListSet] = useState([]);
  const [text, textSet] = useState("");
  const [color, colorSet] = useState([]);
  const url = 
  `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=53af3d2fdf27c517f767ade373c0734c`;

  //api call
  const getEm = () => {
    axios
      .get(url)
      .then((rez) => {
        console.log(rez);
        colorSet(rez.data.city.name);
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
        <TextInput
          color={color}
          colorSet={colorSet}
          text={text}
          textSet={textSet}
          addToList={addColorToList}
          colorList={colorList}
          colorListSet={colorListSet}
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
        <ul>
          {colorList.map((i, index) => (
            <li> {i.color} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
