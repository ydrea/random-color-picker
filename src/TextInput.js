import _ from "lodash";
import React, { useState, useEffect, useRef } from "react";

export const TextInput = ({
  color,
  colorSet,
  text,
  textSet,
  addToList,
  colorList,
}) => {
  //set Errors
  const [errHex, errHexSet] = useState(null);
  const [errIncluded, errIncludedSet] = useState(null);

  const [disable, disableSet] = useState(true)

  //verify input
  const isHex = () => {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = "AABBCC";
    if (!re.test(inputString)) {
      errHexSet("hex!");
      return false;
    } else {
      return true;
    }
  };

  const isIncluded = () => {
    if (_.includes([colorList], text)) {
      errIncludedSet("already listed");
      return false;
    } else {
      return true;
    }
  };

  //validate
  const valiDate = () => {
  if (errHex || errIncluded)
  alert('zilch');
  return false;
  } else {
    return true
    }
  }

useEffect(() => {
  if (firstRender.current) {
    firstRender.current = false
  return 
  } setDisabled(valiDate)
}, [input])


  //do it
  const handleSubmit = (e) => {
    e.preventDefault();
    colorSet(text);
    addToList(color);
    textSet("");
  };

  const handleChange = (e) => {
    textSet(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button type="submit" disabled={disable}>
          Submit
        </button>
      </form>
    </div>
  );
};
