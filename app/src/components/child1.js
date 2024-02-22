import React, { useState } from 'react';

const Child1 = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '15px', width: "60vw", height: "30vh", margin: "15px" }}>
      <header className="text-right">
        <h2 style={{ color: 'white' }}>TO-Do App</h2>
      </header>
      <div className="mt-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Add a task"
          value={task}
          onChange={handleInputChange}
        />
        <br></br>
        <button className="btn btn-primary" onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default Child1;