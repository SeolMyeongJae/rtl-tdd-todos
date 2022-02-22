import React, { useCallback, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true
    }
  ])
  const nextId = useRef(3); // 새로 추가 할 항목에서 사용할 id
  const onInsert = useCallback(
    text => {
      setTodos(
        [...todos,
        { 
          id: nextId.current,
          text,
          done: false
        }]
      );
      nextId.current += 1;
    },
    [todos]
  )
  return <>
    <TodoForm data-testid="helloworld" onInsert={onInsert}/>
    <TodoList todos={todos} />
  </>
};

export default TodoApp;