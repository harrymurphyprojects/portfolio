function Profile() {
  return (
    <>
      <div className="container d-flex justify-content-evenly p-5 bg-light border">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQENSdsEVlXo4Q/profile-displayphoto-shrink_800_800/0/1550567356040?e=1652313600&v=beta&t=uTOOk7L9T9um-fcvC02tLgtPJTMxwqKkZ5l1jMR5Su8"
          className="rounded-circle">
        
        </img>
        <div className="container text-end">
          <h1 className="display-3 pt-2 justify-text-end" >Harry Murphy</h1>
          <h2 className="display-6 pt-2 text-muted" >A Junior Software Engineer</h2>
        </div>
      </div>
    </>
  )
}

export default Profile