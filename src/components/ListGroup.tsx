import { useState } from "react";

function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const getMessage = () => items.length === 0 && <p>No items found</p>;

  // State hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {" "}
      {/* Shortcut for React.Fragment */}
      <h1>My List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
