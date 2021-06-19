//swag
import "./App.css";
import { Button, colors } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
//hooks
import { useState } from "react";
import { useQuery } from "react-query";

//fetch
const getEm = async () =>
  await (await fetch(`https://www.colr.org/json/color/random`))
    .json()
    .then((rez) => JSON.stringify(rez));

function App() {
  const [color, colorSet] = useState([]);

  //query
  const { data, isLoading, error, refetch } = useQuery("colors", getEm, {manual: true, });
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div> zilch </div>;

  //manual query
const reFetch = () => { refetch() }

  //display
  return (
    <div className="App">
      <header className="App-header">fetched, queried</header>
      <Button
    onClick={()=>reFetch()}
      >
        click
      </Button>
    </div>
  );
}

export default App;
