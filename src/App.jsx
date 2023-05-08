import { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
      .then((response) => response.json())
      .then((value) => setData(value));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid blue", margin: "1rem" }}
            >
              <h3>name: {item.title}</h3>
              <p>id: {item.id}</p>
            </div>
          );
        })} */}
      <CreateTodo />
    </div>
  );
}

export default App;
