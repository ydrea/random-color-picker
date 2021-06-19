//swag
import "./App.css";
import { Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
//hooks
import { useState } from "react";
import { useQuery } from "react-query";

//fetch
const getEm = async () =>
  await (await fetch("https://www.colr.org/json/color/random/")).json();

function App() {
  const [color, colorSet] = useState([]);

  //query
  const { data, isLoading, error } = useQuery("colors", getEm);
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div> Greska </div>;

  //display
  return (
    <div className="App">
      <header className="App-header">fetched, queried</header>
      <Button
      //onClick={colorSet=() => void}
      >
        click
      </Button>
    </div>
  );
}

export default App;
