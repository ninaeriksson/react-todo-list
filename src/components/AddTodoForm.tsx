import { useState } from "react";
import "../css/addtodoform.css";

interface AddTodoFormProps {
  onAdd: (text: string, author: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || !author) return; // validering: båda fälten måste fyllas
    onAdd(text, author); // skickar båda värdena till TodoList
    setText(""); // tömmer input efter submit
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todo text"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
      />
      <button type="submit">Add</button>
    </form>
  );
}
