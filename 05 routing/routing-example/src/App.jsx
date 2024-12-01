import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Blog from './pages/Blog';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
