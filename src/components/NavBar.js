import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <ul className="navbar-links">
        <li className="navbar-li"><Link to="/">Home</Link></li>
        <li className="navbar-li"><Link to="/login">Logout</Link></li>
        <li className="navbar-li"><Link to="/yourprofile">Your Profile</Link></li>
        <li className="navbar-li"><Link to="/createroute">Create A Route</Link></li>
        <li className="navbar-li"><Link to="/findroutes">Search for Routes</Link></li>
      </ul>

    </div>
  )

}

export default NavBar
