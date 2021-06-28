import React from "react";
import { Formik } from "formik";
import _ from "lodash";

const Basic = ({
    color,
    colorSet,
    textSet,
    addToList,
    colorList,
  }) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ txt: "" }}
      validate={(values) => {

        const errors = {};

        if (_.includes([colorList], values.txt)) {
          errors.txt = "Previously included";
        }  else if (
          !(
            typeof values.txt === "string" &&
            values.txt.length === 6 &&
            !isNaN(Number("0x" + values.txt))
          )
        ) {
          errors.txt = "Invalid hex color";
        }
        return errors;
     


      }}
      onSubmit={(values) => {
        
      colorSet(values.text);
      addToList(color);
      textSet("");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
