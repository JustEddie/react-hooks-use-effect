import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("");

  // only when count rendering
  useEffect(() => {
    console.log("useEffect called");
  },[count]);

  console.log("Component rendering");

  function handleCountUpdate() {
    setCount(count + 1);
  }

  function handleInputChange(event){
    setName(event.target.value)
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>Click Me</button>
      <span>Count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>{name}</span>

    </div>
  );
}

export default App;
