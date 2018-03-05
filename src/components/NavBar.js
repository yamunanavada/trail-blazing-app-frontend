import React from "react"
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearCurrentUser } from '../actions'

const NavBar = (props) => {

  const loggedIn = !!props.user

  // const token = localStorage.getItem('jwt')
  // if (token) {
  //   this.props.getLoggedInUser
  //
  // } else {
  //   console.log('no token!')
  // }


  return (
    <div>
      <ul className="navbar-links">
        {loggedIn ?
          <div>
              <li className="navbar-li"><Link to="/" onClick={props.clearCurrentUser}>Logout</Link></li>
              <li className="navbar-li"><Link to="/yourprofile">Your Profile</Link></li>
              <li className="navbar-li"><Link to="/createroute">Create A Route</Link></li>
              <li className="navbar-li"><Link to="/findroutes">Find A Route</Link></li>
            </div>
            :
              <li className="navbar-li"><Link to="/login">Login</Link></li>
            }

      </ul>

    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user
  }
}

export default withRouter(connect(mapStateToProps, { clearCurrentUser})(NavBar))
