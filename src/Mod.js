import React, { useState } from "react";
import { useQuery } from "react-query";

const App = (props) => {
  const [text, setText] = useState("");

  // use your async request (axios, fetch, etc)
  // useQuery expects a Promise so we can safely use this instead
  const emulateFetch = async (_) => {
    // axios.get (...)
    console.log(`Passing ${text} to fetch`);
    return new Promise((resolve) => {
      resolve([{ data: "ok" }]);
    });
  };

  const handleClick = () => {
    // manually refetch
    refetch();
  };

  const { isLoading, error, data, refetch } = useQuery(
    ["key", { text }],
    emulateFetch,
    {
      refetchOnWindowFocus: false,
      enabled: false // needed to handle refetchs manually
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p>Home page</p>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleClick}>Click me</button>
      {JSON.stringify(data)}
    </div>
  );
};

export default App;
