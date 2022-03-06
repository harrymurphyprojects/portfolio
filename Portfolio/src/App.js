import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import About from  './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className='home container mt-5 text-end'>Harry Murphy A Junior Software Engineer</div>
      <div className='about'>
        Here is a bit about me...
        <div className="container mt-5">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <About/>
      </div>
      
      <div className="container mt-5">
        <Skills/>
      </div>

      <div className="container mt-5">
        <Projects/>
      </div>


      
      <div className='interests'>What i am up to when im not coding</div>
      <div className='contact'></div>
    </>
  )
}

export default App
