import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { TodoContext } from '../store/todoContext'
const Home = () => {
  const {todos} =useContext(TodoContext);
  console.log(todos)
  return (
    <div>

      Home Page 
      <h1>Total Todos: {todos.length}</h1>
      <h3>Pending Todos: </h3>
      <h6>Completed Todos: </h6><Link to= "/todopage" >TodoApp</Link>
    </div>
  )
}

export default Home
