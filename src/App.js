//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState, useEffect } from "react";
import _ from "lodash";
//components

//main
function App() {
  const [color, colorSet] = useState([]);
  const [text, textSet] = useState([]);

  useEffect(function fetchIt() {
    async function getEm() {
      const rez = await fetch(`https://www.colr.org/json/color/random`);
      const json = await rez.json();
      // colorSet(json);
      console.log(json);
      //de-objectify
      const jsn = _.toArray(json);
      console.log(jsn);
      colorSet(jsn);
      console.log(color);
    }
    getEm();
  }, []);

  //display
  return (
    <div className="App">
      <header className="App-header">fetched</header>
      <Button 
      //onClick={() => colorSet(color[6])}
      >{color[6]}</Button>

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
