function Carousel() {

  return (
    <>
      <h4>Project carousel</h4>
      <div className="carousel-item active">
        <div className="container">
          <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://i.imgur.com/HEvF2jJ.png" className="d-block w-100" alt="first image"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Project 1 - Frogger</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.imgur.com/lAKk7VX.png" className="d-block w-100" alt="second image"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Project 2 - Heros and Villains</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.imgur.com/lKGDISL.png" className="d-block w-100" alt="third image"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Project 3 - Epop</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Carousel