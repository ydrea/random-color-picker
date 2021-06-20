//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState, useEffect } from "react";
import _ from "lodash";
//components
import List from "./List";

//main
function App() {
  const [color, colorSet] = useState([]);
  const [text, textSet] = useState([]);

  useEffect(
    function fetchIt() {
      async function getEm() {
        const rez = await fetch(`https://www.colr.org/json/color/random`);
        const json = await rez.json();
        // colorSet(json);
        console.log(json);
        //de-objectify
        _.toArray(json);
        colorSet(json);
        console.log(color);
      }
      getEm();
    },
    []
  );

  //display
  return (
    <div className="App">
      <header className="App-header">fetched</header>
      <Button onClick={() => colorSet()}>{color.new_color}</Button>
      <List color={color} />
      <input
        type="text"
        value={text}
        onChange={(event) => textSet(event.target.value)}
      />
      <button>Click me</button>
    </div>
  );
}

export default App;
