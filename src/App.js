import React, { useState } from 'react';
import Todo from './components/todo/Todo';
// material UI imports
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
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
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input}  type="submit"  onClick={addTodo}  variant="contained"  color="primary" className="add_todo_button">
          Add Todo
        </Button>
      </FormControl>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}        
      </ul>

    </div>
  );
}

export default App;
