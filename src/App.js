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
  const [color, colorSet] = useState("");
  const url = "https://www.colr.org/json/color/random";

  useEffect(() => {}, [color]);

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

  //display
  return (
    <div className="App">
      <header className="App-header">axiozed</header>
      <Button style={{ background: `#` + `${color}` }} onClick={() => getEm()}>
        color
      </Button>
      <List color={color} />
    </div>
  );
}

export default App;

export const List = ({ color }) => {
  const [text, textSet] = useState("");
  const [colorList, colorListSet] = useState([]);

  const isHex = () => {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = "AABBCC";

    if (!re.test(inputString)) {
      alert("invalid hex");
    } else {
      return true;
    }
    re.lastIndex = 0;
  };

  const isIncluded = () => {
    if (!_.includes([colorList], text)) return true;
  };

  const ifSubmit = () => {
    if (isHex && isIncluded) return true;
  };
  return (
    <div>
      <p>{[...text, color.new_color]}</p>
      <input
        type="text"
        value={text}
        onChange={(event) => textSet(event.target.value)}
      />
      <button disabled={!ifSubmit}>Color me</button>
    </div>
  );
};
