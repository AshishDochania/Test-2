import React, { useState } from 'react';
import ShowTodo from './ShowTodo';
import AddTodo from './AddTodo';
import FilterButton from './FilterButton';

const TodoBody = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  function editTodo(id, newTask){
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className='todo-body'>
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <FilterButton setFilter={setFilter} />
      <ShowTodo
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoBody;
