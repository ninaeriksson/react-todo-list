import { useState } from 'react'
import "./css/app.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Todo List</h1>
      </div>
    </>
  )
}

export default App
