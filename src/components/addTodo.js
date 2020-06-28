import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function AddTodo({value}) {

const classes = useStyles();
const [todo, AddTodo] = useState({
  todos:''
});

const handleChange=(e)=>{
  AddTodo({todos:e.target.value})
}

const submit =(e)=>{
e.preventDefault();
value(todo.todos)
}
  return (
    <div className="AddTodo">
      <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      onSubmit={submit}
      >
         <TextField
          id="standard-basic" 
          label="Add Todo" 
          value={todo.todos}
          onChange={handleChange}
          />
          <br /><br />
        <Button 
        type="submit"
        variant="contained" 
        color="primary">
            Submit
        </Button>
    </form>
    </div>
  );
}

export default AddTodo;