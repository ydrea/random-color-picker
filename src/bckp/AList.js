import _ from "lodash";
// import { ListItem } from "./bckp/ListItem";

//
{
  /* 
  

*/
}
//

//add text to list
// const addTextToList = (text) => {
//   let copy = [...colorList];
//   copy = [...copy, { id: colorList.length + 1, text, complete: false }];
//   colorListSet(copy);
// };

export const AList = ({
  text,
  textSet,
  // addTextToList,
  colorList,
  colorListSet,
}) => {
  //verify input
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
    // addTextToList(text);
    textSet(text);
  };

  const handleChange = (e) => {
    textSet(e.currentTarget.value);
  };

  // const handleToggle = (id) => {
  //   let mapped = colorList.map((text) => {
  //     return text.id === Number(id)
  //       ? { ...text, complete: !text.complete }
  //       : { ...text };
  //   });
  //   colorListSet(mapped);
  // };

  return (
    <div>
      <p>{text}</p>
{/* 
      {colorList.map((item) => {
        return <p>
         item={item} handleToggle={handleToggle}      
         <p/>
        })} */}
      <form onSubmit={handleSubmit}>
        <input
          value={color}
          type="text"
          onChange={handleChange}
          placeholder="Daj hex..."
        />
        <button disabled={!ifSubmit}>Submit</button>
      </form>
    </div>
  );
};