function Skills() {

  return (
    <section className="container pt-5" id='skills'>
      <h1 className="display-6 pt-2" >Here are some of my coding skills...</h1>
      <hr className="col-12 bg-dark border-2 border-top border-dark mt-5"></hr>
      <div className="row mt-2">
        <ul className="col list-unstyled text-center">
          <div className="mb-3 fw-bold">Front End</div>
          <li className="mb-2">JavaScript</li>
          <li className="mb-2">React.js</li>
          <li className="mb-2">HTML</li>
          <li className="mb-2">CSS</li>
          <li className="mb-2">SASS</li>
          <li className="mb-2">Bulma</li>
          <li className="mb-2">Bootstrap</li>
        </ul>
        <ul className="col list-unstyled text-center">
          <div className="mb-3 fw-bold">Back End</div>
          <li className="mb-2">Node.js</li>
          <li className="mb-2">Mongoose</li>
          <li className="mb-2">Python</li>
          <li className="mb-2">Django</li>
          <li className="mb-2">Insomnia</li>
          <li className="mb-2">TablePlus</li>
        </ul>
        <hr className="bg-dark border-2 border-top border-dark"></hr>
      </div>
      
    </section>
  )
}

export default Skills