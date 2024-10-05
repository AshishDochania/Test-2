import React from 'react';
import TodoItem from './TodoItem';

function ShowTodo({ todos, toggleComplete, editTodo, deleteTodo }){
  return (
    <ul className='ul'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default ShowTodo;
