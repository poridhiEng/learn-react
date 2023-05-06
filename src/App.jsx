import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [currentText, setCurrentText] = useState("demo");

  function handleClick() {
    setCounter(counter + 100);
  }

  function handleChange(event) {
    setCurrentText(event.target.value);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Add one</button>
      <br />
      <input type="text" onChange={handleChange} />
      <p>{currentText}</p>
    </div>
  );
}

export default App;
