import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Todo from './pages/Todo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todopage' element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
