import React, { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";


const ParentDiv = () => {
  const [toDoArray, setToDoArray] = useState([]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, isDone: false };
    setToDoArray((prevArray) => [...prevArray, newTask]);
  };

  const deleteTask = (index) => {
    setToDoArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const markAsDone = (index) => {
    setToDoArray((prevArray) =>
      prevArray.map((task, i) => (i === index ? { ...task, isDone: !task.isDone } : task))
    );
  };

  return (
    <div style={{ border: '2px solid red', width: "70vw", height: "70vh", margin: 'auto' }}>
      <Child1 addTask={addTask} />
      <Child2 toDoArray={toDoArray} deleteTask={deleteTask} markAsDone={markAsDone} />
    </div>
  );
}

export default ParentDiv;
