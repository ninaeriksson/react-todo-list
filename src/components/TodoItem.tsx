interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

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
      {todo.text}
      <button style={{ marginLeft: "10px" }} onClick={onToggle}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button style={{ marginLeft: "10px" }} onClick={onRemove}>
        Remove
      </button>
    </li>
  );
}
