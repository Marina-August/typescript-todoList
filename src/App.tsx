import {useState} from 'react';

import Todo from './components/Todo';
import Todos from './components/models/todo';
import NewTodo from './components/NewTodo';
import './App.css'

function App() {
  const[todo, setTodo]  = useState<Todos[]>([]);

  const addTodo =(text:string)=>{
    const newTodo = new Todos (text);
    setTodo((prevTodo)=>{
      // return prevTodo.concat(newTodo);
      return [...prevTodo, newTodo];
    } )

  }

  const deleteTodo =(id:string)=>{
     const copiedTodo = todo.filter(el => el.id!== id);
     setTodo(copiedTodo);
  }

  return (
    <>
      <NewTodo onAddTodo={addTodo}/>
      <Todo items={todo} onDelete={deleteTodo}/>
    </>
  );
}

export default App;
