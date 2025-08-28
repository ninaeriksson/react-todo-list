import type { Todo } from "../types";
import { useState } from "react";
import "../css/todoitem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
  onEdit: (newText: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() !== "") {
      onEdit(newText);
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        marginBottom: "8px",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button style={{ marginLeft: "10px" }} onClick={handleSave}>
            Save
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>{todo.text}</p>
          <p>{todo.author}</p>
          <small>{todo.createdAt.toLocaleString()}</small>
          <button style={{ marginLeft: "10px" }} onClick={onToggle}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button style={{ marginLeft: "10px" }} onClick={onRemove}>
            Remove
          </button>
        </>
      )}
    </li>
  );
}
