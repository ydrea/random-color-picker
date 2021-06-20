//swag
import "./App.css";
import { Button } from "@material-ui/core";

//hooks
import { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";

//components

//main
function App() {
  const [color, colorSet] = useState('');
  const [text, textSet] = useState([]);
const url = `https://www.colr.org/json/color/random`

useEffect(() => {
  }, [color]);
  
const getEm = () =>
{ axios
      .get(url)
      .then((rez) => {
        console.log(rez);
        colorSet(rez.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
console.log(color);

  //display
  return (
    <div className="App">
      <header className="App-header">fetched</header>
      <Button
      onClick={() => getEm()}
      >
        color
      </Button>
{color.new_color}
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
