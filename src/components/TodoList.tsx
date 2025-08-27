import React from "react";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

interface Todo {
  id: number;
  text: string;
}

let nextId = 1;

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Att göra 1" },
    { id: 2, text: "Att göra 2" },
    { id: 3, text: "Att göra 3" },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nextId++,
      text,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}