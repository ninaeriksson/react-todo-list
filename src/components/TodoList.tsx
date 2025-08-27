import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";
import "../css/todolist.css";

let nextId = 1;

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: nextId++,
      text: "Att göra 1",
      completed: false,
      createdAt: new Date(),
      author: "Användare 1",
    },
    {
      id: nextId++,
      text: "Att göra 2",
      completed: false,
      createdAt: new Date(),
      author: "Användare 2",
    },
    {
      id: nextId++,
      text: "Att göra 3",
      completed: false,
      createdAt: new Date(),
      author: "Användare 3",
    },
  ]);

  const addTodo = (text: string, author: string) => {
    const newTodo: Todo = {
      id: nextId++,
      text,
      completed: false,
      createdAt: new Date(),
      author,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list-container">
      <h1>My Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleComplete(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
