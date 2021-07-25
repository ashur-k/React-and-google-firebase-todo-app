import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    'Finish React toutorial!!!',
    'Finish Django toutorial!!!',
    'Finish firebase toutorial!!!',
  ]);

  const [input, setInput] = useState('');
  const addTodo = (event) => {
    // this will fire when we click the button
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">

      <h1>Hello World</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}        
      </ul>

    </div>
  );
}

export default App;
