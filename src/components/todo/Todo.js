import React, { useState } from 'react'
import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Input, Modal, FormControl } from '@material-ui/core';

import db from '../../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    left:'33.3%',
    bottom: '50vh',
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3), 
  },
  add_todo_button: {
    marginTop: '12px !important',
    padding: '2px !important',
  },  
  modal_inside_update_button: {
    minWidth: "20px !important"
  },
  delete_button: {
    marginLeft: '15px !important'
  },
 
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(false);
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
          <h4>
            <Button className={classes.modal_inside_update_button} onClick={handleOpen} size="small"  variant="contained" color="secondary">X</Button> 
             <span>Update-Todo</span>
          </h4>
          
          <FormControl>
            <Input placeholder={props.todo.todo} value={input} onChange={ event => setInput(event.target.value)}/>
            <Button disabled={!input}  onClick={updateTodo} variant="contained" color="primary" className={classes.add_todo_button}>Update todo</Button>
          </FormControl>
          </div>
      </Modal>
      <List className="todo__list">  
        <ListItem>
          <ListItemAvatar><WorkIcon/>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} />
          <Button variant="contained" color="primary" onClick={e => setOpen(true)}>Edit</Button>
          <Button variant="contained" color="secondary"  onClick={event => db.collection('todos').doc(props.todo.id).delete()} className={classes.delete_button}>
            <DeleteIcon/>
          </Button>
        </ListItem>
        <hr />
      </List>
    </div>
  )
}

export default Todo

