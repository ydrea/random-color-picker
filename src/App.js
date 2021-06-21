//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState, useEffect } from "react";
import _ from "lodash";
import { api } from "./api";

//components
import { List } from "./List";

//main
function App() {
  const [colorList, colorListSet] = useState([]);
  const [text, textSet] = useState("");
  const [color, colorSet] = useState("");
  const url = `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`;

  useEffect(() => {
    addToList();
  }, [color]);

  const getEm = () => {
    api
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

  //add to list
  const addToList = (text) => {
    let copy = [...colorList];
    copy = [...copy, { id: colorList.length + 1, text, complete: false }];
    colorListSet(copy);
  };

  //display
  return (
    <div className="App">
      <header className="App-header">axios api</header>
      <Button style={{ background: `#` + `${color}` }} onClick={() => getEm()}>
        color
      </Button>
      <List
        color={color}
        text={text}
        textSet={textSet}
        addToList={addToList}
        colorList={colorList}
        colorListSet={colorListSet}
      />
    </div>
  );
}

export default App;
