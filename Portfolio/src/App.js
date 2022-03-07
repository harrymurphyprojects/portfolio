import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import About from  './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <div className="container mt-5">
        <About />
      </div><div className="container mt-5">
        <Skills />
      </div><div className="container mt-5">
        <Projects />
      </div>
      <div className="container mt-5">
        <Footer />
      </div>
    </>
  )
}

export default App
