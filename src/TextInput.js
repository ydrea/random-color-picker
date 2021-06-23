import _ from "lodash";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export const TextInput = ({
  color,
  colorSet,
  text,
  textSet,
  addToList,
  colorList,
}) => {
  //use Form

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // e.preventDefault();
    colorSet(data);
    addToList(color);
    textSet("");
  };

  console.log(watch("text"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          // value={text}
          type="text"
          name="text"
          placeholder="enter a hex..."
          ref={register({
            validate: {
              isIn: (value) => {
                return _.includes([colorList], value);
              },
              isHex: (value) => {
                return (
                  typeof value === "string" &&
                  value.length === 6 &&
                  !isNaN(Number("0x" + value))
                );
              },
            },
          })}
        />
        <button type="submit">Submit</button>

        {errors.text && errors.text.type === "isHex" && <span>Hex!</span>}

        {errors.text && errors.text.type === "isIn" && (
          <span>Already listed...</span>
        )}
      </form>
    </div>
  );
};
