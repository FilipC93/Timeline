import React, { useEffect, useState } from 'react'
import './styles.css'
import { NewForm } from './NewForm';
import { TodoList } from './TodoList';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS");
    if (localVal == null) return [];
    return JSON.parse(localVal);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  const addTodo = title => {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    })
  }

  const deleteTodo = id => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}