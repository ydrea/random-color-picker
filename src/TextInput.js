import _ from "lodash";
import React, { useState } from "react";
import { useFormik } from "formik";


export const TextInput = ({
  color,
  colorSet,
  // text,
  textSet,
  addToList,
  colorList,
}) => {
//validate
const validate = (values) => {
  const errors = {};

  if (_.includes([colorList], values.text)) {
    errors.values.text = "Previously included";
  } else if (
    !(
      typeof values.text === "string" &&
      values.text.length === 6 &&
      !isNaN(Number("0x" + values.text))
    )
  ) {
    errors.text = "Invalid hex color";
  }
  return errors;
};

  //formik
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validate,
    onSubmit: (values) => {
      // e.preventDefault();
      colorSet(values.text);
      addToList(color);
      textSet("");
    },
  });

  //do it
  // const formik.handleSubmit = (e) => {
  //   e.preventDefault();
  //   colorSet(text);
  //   addToList(color);
  //   textSet("");
  // };

  // const formik.handleChange = (e) => {
  //   textSet(e.currentTarget.value);
  // };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="text">Add a Hex</label>
        <input
          id="text"
          name="text"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.text}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
