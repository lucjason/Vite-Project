function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const getMessage = () => items.length === 0 && <p>No items found</p>;

  return (
    <>
      {" "}
      {/* Shortcut for React.Fragment */}
      <h1>My List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            onClick={() => console.log(item)}
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
