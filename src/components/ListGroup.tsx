function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const getMessage = () => items.length === 0 && <p>No items found</p>;

  let selectedIndex = 0;

  const handleClick = (
    event: React.MouseEvent,
    item: string,
    index: number
  ) => {
    console.log(event, item);
    selectedIndex = index;
  };

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
            onClick={(event) => handleClick(event, item, index)}
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
