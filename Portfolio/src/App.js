import React from 'react'
import Carousel from './components/Carousel'

function App() {
  return (
    <>
      <nav>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a href="about" className="nav-link active">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className='home container mt-5 text-end'>Harry Murphy A Junior Software Engineer</div>
      <div className='about'>
        Here is a bit about me...
        <div className="container mt-5">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className='skills'>Skill Set</div>
      
      
      <div className="container mt-5">
        <Carousel/>
      </div>


      
      <div className='interests'>What i am up to when im not coding</div>
      <div className='contact'></div>
    </>
  )
}

export default App
