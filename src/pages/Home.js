import React,{useState} from 'react';
import AddTodo from '../components/addTodo'
import TodoList from '../components/todoList'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

export default function Home() {

const [todo, AdTodo] = useState({
    todos:''
  });
const addTodo=(e)=>{
  AdTodo({todos:e})
console.log(todo)
}



  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
      className="container" 
      maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#74B9FF', height: '100vh' }} >
        <Typography variant="h3" component="h2">
             Add Todo..
        </Typography>
        <AddTodo value={addTodo}/>
        <TodoList listTodo={todo}/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}