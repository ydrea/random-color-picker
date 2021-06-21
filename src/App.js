//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";

//components
import { List } from "./List";

//main
function App() {
  const [colorList, colorListSet] = useState([]);
  const [text, textSet] = useState("");
  const [colorText, colorTextSet] = useState("");
  const [color, colorSet] = useState([]);
  const url = `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`;

  const getEm = () => {
    axios
      .get(url)
      .then((rez) => {
        console.log(rez);
        colorSet(rez.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(color);

  //add text to list
  const addTextToList = (text) => {
    let copy = [...colorList];
    copy = [...copy, { id: colorList.length + 1, text, complete: false }];
    colorListSet(copy);
  };

  //add color to list
  const addColorToList = (color) => {
   let col = (color.new_color);
   console.log(col);
          let copy = [...colorList];
    copy = [...copy, { id: colorList.length + 1, col, complete: false }];
    colorListSet(copy);
    console.log(colorList);

  };
  console.log(colorList);

  const handleClick = (e) => {
    getEm();
    addColorToList(color);
  //   textSet("");
  };

  // useEffect(() => {
  //   addColorToList();
  // }, []);

  //display
  return (
    <div className="App">
      <header className="App-header">axios api</header>
      <Button style={{ background: `#` + `${color}` }} onClick={() => handleClick()}>
        color
      </Button>
      {colorList.map(i => (
        <p key={i.id} > {i.col} </p>
      ) )}
      <List
        color={color}
        colorSet={colorSet}
        text={text}
        textSet={textSet}
        addToList={addTextToList}
        colorList={colorList}
        colorListSet={colorListSet}
      />
    </div>
  );
}

export default App;
