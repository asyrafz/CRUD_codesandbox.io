// index.js

import React, { useState } from "react";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a CRUD App", completed: false }
  ]);

  const addTodo = (task) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task,
        completed: false
      }
    ]);
  };

  const updateTodo = (id, task) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.task.value);
          e.target.task.value = "";
        }}
      >
        <input type="text" name="task" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />

            <span className={todo.completed ? "completed" : ""}>
              {todo.task}
            </span>

            <div style={{ display: "flex", justifyContent: "right" }}>
              <button onClick={() => updateTodo(todo.id, prompt("Edit Todo"))}>
                Edit
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
