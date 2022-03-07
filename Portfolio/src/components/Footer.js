import { LinkedIn, GitHub, Email } from '@material-ui/icons'

function Footer() {
  return (
    <nav>
      <ul className="nav nav-pills justify-content-evenly p-5">
        <li className="justify-content-right">
          <a className="btn" href="https://www.linkedin.com/in/harry-murphy-projects">
            <LinkedIn fontSize="Large" />
          </a>
          <a className="btn" href="https://github.com/harrymurphyprojects">
            <GitHub fontSize="Large" />
          </a> 
          <a className="btn" href="mailto:harryjmurphy1997@gmail.com">
            <Email fontSize="Large" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Footer