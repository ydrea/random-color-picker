import _, { values } from "lodash";
import React, { useState } from "react";
import { useField, Form, FormikProps, Formik } from "formik";

export const TextInput = ({
  color,
  colorSet,
  textSet,
  addToList,
  colorList,
}) => {
  //validate
  const validate = (values) => {
    
    const errors = {};

    if (_.includes([colorList], values.text)) {
      errors.text = "Previously included";
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
  const formik = useField({
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
