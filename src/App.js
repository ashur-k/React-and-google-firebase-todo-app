import React, { useState, useEffect } from 'react';
import Todo from './components/todo/Todo';
// material UI imports
import { Container, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to 
  // the database and fetch ne todos as they get added / removed
  useEffect(() => {
    // this code here.. fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, 
        todo: doc.data().todo
      })))
    })
  }, []);

  
  console.log('data', todos)
  const addTodo = (event) => {
    // this will fire when we click the button
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <Container className="main__container">
      <Typography variant="h4" className="typography__h4">
        Todo App with React and Google Firebase
      </Typography>
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input}  type="submit"  onClick={addTodo}  variant="contained"  color="primary" className="add_todo_button">
          Add Todo
        </Button>
      </FormControl>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))}       
        
      </ul>
      </Container>
    </div>
  );
}

export default App;
