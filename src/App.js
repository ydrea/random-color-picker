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

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(text);
    textSet('');
    
  }

  const addToList = (text) => {
    let copy = [...colorList];
    copy = [...copy, { id: colorList.length + 1, text, complete: false }];
    colorListSet(copy);
  }

  const handleChange = (e) => {
    textSet(e.currentTarget.value)
}


const handleToggle = (id) => {
  let mapped = colorList.map(text => {
    return text.id === Number(id) ? { ...text, complete: !text.complete } : { ...text};
  });
  colorListSet(mapped);
}
  return (
    <div>
      <p>{[...text, color.new_color]}</p>

      {colorList.map(item => {
                return (
                    <ListItem item={item} handleToggle={handleToggle} />
                )
            })}
      
      <form onSubmit={handleSubmit}>
            <input value={text} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button 
            disabled={!ifSubmit}
            >Submit</button>
        </form>
    </div>
  );
};


export const ListItem = ({item, handleToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
}
  return (
    <div id={item.id} key={item.id + item.text} name="todo" value={item.id} onClick={handleClick}>
    {item.text}
      
    </div>
  )
}
