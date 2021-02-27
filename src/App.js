import React, { useState} from 'react';
import Todo from './Todo';
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const[todos,setTodos] = useState(['What we do daily','Agile methodology','What we do daily','Agile methodology']);
  const [ input, setInput] = useState(''); 
  console.log('test inputs');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();     // will stop the screen from refreshing every time todo is added
    console.log ('Verb Education');
    setTodos([...todos, input]);
    setInput('');  // clear up the input after hitting submit    
    
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          
        </FormControl>
   
        <Button disabled={!input} type="submit" onClick={addTodo}variant="contained" color="primary">
          Add Todo
         </Button>
         {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
         
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
