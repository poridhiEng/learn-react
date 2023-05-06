import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((value) => setData(value));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h3>name: {item.title}</h3>
              <p>id: {item.id}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
