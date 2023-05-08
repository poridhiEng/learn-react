import { useState } from "react";
import axios from "axios";

export const CreateTodo = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleClick = async () => {
    const body = {
      id: 1,
      userId: 1,
      title: title,
      completed: completed,
    };

    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/todos/1",
        body
      );
      console.log(response.data);
    } catch (error) {
      console.log({ error });
    }
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
