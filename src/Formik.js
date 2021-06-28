import React from "react";
import { Formik } from "formik";
import _ from "lodash";

const Basic = ({ color, colorSet, txtSet, addToList, colorList }) => (
  <div>
    <Formik
      initialValues={{ txt: "" }}
      validate={(values) => {
        const errors = {};
        if (
          !(
            typeof values.txt === "string" &&
            values.txt.length === 6 &&
            !isNaN(Number("0x" + values.txt))
          )
        ) {
          errors.txt = "Invalid hex color";
        }
        else if
        (_.includes([colorList], values.txt)) {
          errors.txt = "Previously included";
        } 
        
        return errors;
      }}
      onSubmit={(values) => {
        colorSet(values.txt);
        addToList(color);
        txtSet("");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="txt"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.txt}
          />
          {errors.txt && touched.txt && errors.txt}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
