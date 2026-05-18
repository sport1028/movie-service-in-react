import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List : {todos.length}</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new todo..."
          />
          <button type="submit">Add</button>
          <hr />
          <ul>
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
