import _ from "lodash";
import React, { useState } from "react";
export const TextInput = ({
  color,
  colorSet,
  text,
  textSet,
  addToList,
  colorList,
}) => {
  
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
          name="text"
          onChange={handleChange}
          placeholder="enter a hex..."
        />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};
