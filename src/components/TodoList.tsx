import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let nextId = 1;

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: nextId++, text: "Att göra 1", completed: false },
    { id: nextId++, text: "Att göra 2", completed: false },
    { id: nextId++, text: "Att göra 3", completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: nextId++, text, completed: false };
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
    <div>
      <h2>My Todo List</h2>
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
