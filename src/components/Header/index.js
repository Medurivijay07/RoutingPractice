// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <h1>Wave</h1>
    </div>
    <ul className="links-list">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
