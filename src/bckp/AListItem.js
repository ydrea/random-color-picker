
export const ListItem = ({ item, handleToggle }) => {
    const handleClick = (e) => {
      e.preventDefault();
      handleToggle(e.currentTarget.id);
    };
    return (
      <div
        id={item.id}
        key={item.id + item.text}
        name="bold"
        value={item.id}
        onClick={handleClick}
      >
        {item.text}
      </div>
    );
  };