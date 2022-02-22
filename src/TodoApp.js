import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return <>
    <TodoForm data-testId="helloworld" />
    <TodoList todos={[]} />
  </>
};

export default TodoApp;