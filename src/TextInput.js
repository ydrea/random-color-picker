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
  const [errHex, errHexSet] = useState({});
  const [errIncluded, errIncludedSet] = useState({});

  const [disable, disableSet] = useState(false);
  const firstRender = useRef(true);

  //validate
  const valiDate = () => {
    //hex
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = "AABBCC";
    if (!re.test(inputString)) {
      errHexSet("hex!");
      //is listed
      if (_.includes([colorList], text)) {
        errIncludedSet("already listed");

        if (errHex || errIncluded) {
          alert("zilch");
          return false;
        } else {
          return true;
        }
      }
    }
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    disableSet(valiDate);

  console.log (disable);
  }, [text]);

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
