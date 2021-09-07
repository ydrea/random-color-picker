import _ from "lodash";
import React, { useState } from "react";

export const TextInput = ({
  color,
  colorSet,
  text,
  textSet,
  addToList,
  colorList,
  addColorToList,
  getEm,
}) => {
  //do it
  const handleSubmit = (e) => {
    // e.preventDefault();
    // colorSet(text);
    addToList(color);
    // textSet("");
    // };
    //call em up on button
    // const handleClick = () => {
    getEm();
    // addColorToList(color);
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
          name="text"
          onChange={handleChange}
          placeholder="enter a city"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
