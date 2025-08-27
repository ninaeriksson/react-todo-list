import type { Todo } from "../types";
import "../css/todoitem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        marginBottom: "8px",
      }}
    >
      <p>{todo.text}</p>
      <p>{todo.author}</p>
      <small>{todo.createdAt.toLocaleString()}</small>
      <button style={{ marginLeft: "10px" }} onClick={onToggle}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button style={{ marginLeft: "10px" }} onClick={onRemove}>
        Remove
      </button>
    </li>
  );
}
