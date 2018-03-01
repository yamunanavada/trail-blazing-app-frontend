import React from "react"
import { Link } from 'react-router-dom'

const NavBar = (props) => {

  // const logginIn = !!props.currentUser
  // {loggedIn ?
  //       <li><a onClick={props.logOut}>Logout</a></li>
  //     :
  //       <li><Link to="/login">Login</Link></li>
  //     }

  return (
    <div>
      <ul className="navbar-links">
        <li className="navbar-li"><Link to="/login">Logout</Link></li>
        <li className="navbar-li"><Link to="/yourprofile">Your Profile</Link></li>
        <li className="navbar-li"><Link to="/createroute">Create A Route</Link></li>
        <li className="navbar-li"><Link to="/findroutes">Find A Route</Link></li>
      </ul>

    </div>
  )

}

export default NavBar
