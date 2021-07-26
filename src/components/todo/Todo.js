import React, { useState } from 'react'
import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core';
import './Todo.css';
import db from '../../firebase';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3), 
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // update the todo with the new input text

    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});

    setOpen(false);
  }


  return (
    <div>
      <Modal open={open} onClose={e => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={ event => setInput(event.target.value)}/>
          <Button onClick={updateTodo}>Update todo</Button>
        </div>
      </Modal>
      <List className="todo__list">  
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
          <button onClick={e => setOpen(true)}>Edit</button>
          <DeleteIcon variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
        </ListItem>
        <hr />
      </List>
    </div>
  )
}

export default Todo

