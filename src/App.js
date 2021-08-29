import React from 'react'
import About from './pages/About'
import Dishes from './pages/Dishes'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Rieview from './pages/Rieview'
import Search from './pages/Search'
import "./styles/main.css"
function App() {
  return (
    <>
            <Header/>
            <Search/>
            <Home/>
            <Dishes/>
            <About/>
            <Menu/>
            <Rieview/>
            <Order/>
            <Footer/>
    </>
  )
}

export default App
