import React, { useState } from 'react';

function AddTodo({ addTodo }){
  const [task, setTask] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    if (task.trim()) {
      addTodo({ id: Date.now(), task, completed: false });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
