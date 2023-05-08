import { useState } from "react";

export const CreateTodo = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        userId: 1,
        title: title,
        completed: completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log({ error: error }));
  };

  return (
    <div>
      {/* <label>userId:</label>
      <input
        type="number"
        onChange={(event) => setUserId(Number(event.target.value))}
      /> */}
      <br />
      <label>title:</label>
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <br />
      <label>completed:</label>
      <input type="checkbox" onChange={() => setCompleted(!completed)} />
      <br />
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
};
