import TodoList from "./components/TodoList";
import "./css/app.css";
import "./css/index.css";


function App() {
  return (
    <>
      <div className="app">
        {/* <h1>React Todo List</h1> */}
        <TodoList />
      </div>
    </>
  );
}

export default App;
