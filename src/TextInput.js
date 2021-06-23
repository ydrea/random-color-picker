import _ from "lodash";

export const TextInput = ({
  color,
  colorSet,
  text,
  textSet,
  addToList,
  colorList,
}) => {
//set Errors
const [errHex, errHexSet] = useState(null)
const [errIncluded, errIncludedSet] = useState(null)

  //verify input
  const isHex = () => {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = "AABBCC";
    if (!re.test(inputString)) {
      errHexSet('hex!')
      return false
    } else {
      return true
    }
  };

  const isIncluded = () => {
    if (_.includes([colorList], text)) {
      errIncludedSet('already listed')
      return false
    } else {
      return true;
    }
  };

  const ifSubmit = () => {
    if (isHex && isIncluded) return true;
  };

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
        <button type="submit" disabled={!ifSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
