// import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Thank you for clicking the button!
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>
    </div>
  );
  /*  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  ); */

  /*   const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  ); */
}

export default App;
