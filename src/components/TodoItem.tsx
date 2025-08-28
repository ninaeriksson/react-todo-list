import type { Todo } from "../types";
import { useState } from "react";
import upArrow from "../assets/arrow_up.png";
import downArrow from "../assets/arrow_down.png";
import "../css/todoitem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
  onEdit: (newText: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
  onEdit,
  onMoveUp,
  onMoveDown,
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
          <p className="todo-text">{todo.text}</p>
          <p className="todo-author">{todo.author}</p>
          <small className="todo-date">{todo.createdAt.toLocaleString()}</small>
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
          <button style={{ marginLeft: "10px" }} onClick={onMoveUp}>
            <img
              src={upArrow}
              alt="Move Up"
              style={{ width: "16px", height: "12px" }}
            />
          </button>
          <button style={{ marginLeft: "10px" }} onClick={onMoveDown}>
            <img
              src={downArrow}
              alt="Move Down"
              style={{ width: "16px", height: "12px" }}
            />
          </button>
        </>
      )}
    </li>
  );
}
