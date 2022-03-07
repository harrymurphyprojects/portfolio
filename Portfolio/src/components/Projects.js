import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'

function Projects() {

  return (
    <>
      <h1 className="display-6 pt-5" id='projects'>My Projects</h1>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/HEvF2jJ.png"
            alt="First Project"
          />
          <Carousel.Caption>
            <h3 className="text-white">Project 1 - Frogger</h3>
            <p className="text-white">Deployed Version <a href="https://harrymurphyprojects.github.io/SEI60-Project-1/" className="text-white">Here</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/lAKk7VX.png"
            alt="Second Project"
          />
          <Carousel.Caption>
            <h3 className="text-white">Project 2 - Heroes and Villains</h3>
            <p className="text-white">Deployed Version <a href="https://kind-kirch-95c8ba.netlify.app/" className="text-white">Here</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/lKGDISL.png"
            alt="Third Project"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Project 3 - Epop</h3>
            <p className="text-dark">Deployed Version <a href="https://eepop.netlify.app/" className="text-dark">Here</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>

  )
}

export default Projects