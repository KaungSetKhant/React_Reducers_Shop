import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Addtocart from './components/Addtocart'
import Detail from './components/Detail'
import PageFooter from './components/PageFooter'
import ArrowScroll from './components/ArrowScroll'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/addtocart' element={<Addtocart/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
      <ArrowScroll/>
      <PageFooter/>
    </>
  )
}

export default App
