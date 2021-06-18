import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { useEffect } from "react";

const fetchColors=(hex)=> {
  return fetch(`http://www.colr.org/json/color/random/${hex}`, {mode: 'no-cors' });
}

fetchColors().then((data) => {
  console.log(data);
});

function App() {
  // useEffect(
  //   fetchColors(),
  //   [],
  // )

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
