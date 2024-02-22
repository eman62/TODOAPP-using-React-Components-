import React from 'react';

const Child2 = ({ toDoArray, deleteTask, markAsDone }) => {
  return (
    <>
      <div style={{ border: "2px solid gray", width: "60vw", height: "30vh", padding: "15px", margin: "20px",overflow:"scroll" }}>
        {Array.isArray(toDoArray) && toDoArray.map((task, index) => (
          <div key={index} style={{ border: "2px solid gray", width: "30vw", height: "8vh",paddingLeft:"10px", marginBottom: "10px", display: "flex", justifyContent: "space-between", textDecoration: task.isDone ? "line-through" : "none" }}>
            <div>{task.text}</div>
            <div>
              <button className="btn btn-dark m-1" onClick={() => deleteTask(index)}>Delete</button>
              <button className="btn btn-success" onClick={() => markAsDone(index)}>Done</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Child2;
