import React from 'react'
import "./App.css"
import Header from './component/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './component/pages/Home'
import About from './component/pages/About'
import Blog from './component/pages/Blog'
import Contact from './component/pages/Contact'
import Footer from './component/footer'
const App = () => {
  return (
    <div>
      
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
