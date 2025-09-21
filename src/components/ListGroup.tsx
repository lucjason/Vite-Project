import { useState } from "react";

// TypeScript Interface
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const getMessage = () => items.length === 0 && <p>No items found</p>;

  // State hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {" "}
      {/* Shortcut for React.Fragment */}
      <h1>{heading}</h1>
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
