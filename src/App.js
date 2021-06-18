import "./App.css";
import { useState, useEffect } from "react";
import {useQuery} from 'react-query';

const getProducts = async () => 
await (await fetch (
    "https://www.colr.org/json/color/random/"
)).json();

function App() {
  const [loading, setLoading] = useState(false);
  const [color, colorSet] = useState([]);


  const {data, isLoading, error} = useQuery ('stvari', getProducts); 
  console.log(data);


  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://www.colr.org/json/color/random/"
  //     ).then(function (response) {
  //       if (!response.ok) {
  //         return Promise.reject("zilch");
  //       }
  //       return response.json();
  //     });
  //     colorSet(response);
  //     console.log(color);
  //     setLoading(false);
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">fetched</header>
    </div>
  );
}

export default App;
