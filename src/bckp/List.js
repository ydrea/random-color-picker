import _ from "lodash";
import { ListItem } from "./ListItem";

export const List = ({
  color,
  text,
  textSet,
  addToList,
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
    addToList(text);
    textSet("");
  };

  const handleChange = (e) => {
    textSet(e.currentTarget.value);
  };

  const handleToggle = (id) => {
    let mapped = colorList.map((text) => {
      return text.id === Number(id)
        ? { ...text, complete: !text.complete }
        : { ...text };
    });
    colorListSet(mapped);
  };

  return (
    <div>
      <p>{text}</p>

      {colorList.map((item) => {
        return <ListItem item={item} handleToggle={handleToggle} />;
      })}

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button disabled={!ifSubmit}>Submit</button>
      </form>
    </div>
  );
};
