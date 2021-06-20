//swag
import "./App.css";
import { Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
//hooks
import { useState } from "react";
import { useQuery } from "react-query";
import _ from "lodash";

//fetch
const getEm = async () =>
  await (await fetch(`https://www.colr.org/json/color/random`))
    .json()
    .then((rez) => _.toArray(rez));

function App() {
  const [text, textSet] = useState("");
  //query
  const { data, isLoading, error, refetch } = useQuery(["color", 6], getEm, {
    manual: true,
  });
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div> zilch </div>;

  //manual query
  const reFetch = () => {
    refetch();
  };

  //display
  return (
    <div className="App">
      <header className="App-header">fetched, queried</header>
      <Button onClick={() => reFetch()}>{data[6]}</Button>
      
      <input
        type="text"
        value={text}
        onChange={(event) => textSet(event.target.value)}
      />
      <button>Click me</button>
      { 
        <ul>
          <li> {data[6]} </li>
        </ul>
      }
    </div>
  );
}

export default App;
