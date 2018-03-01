import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import { Link, withRouter } from 'react-router-dom'


class SignIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
    this.props.history.push(`/findroutes`)
  }


  render() {
    return (
    <div className="signin-component">
      <h1> Trail Blazin </h1>
      <div class="video-background">
        <div class="video-foreground">
            <iframe src="https://youtube.com/embed/gKmO0RjeE1g?autoplay=1&loop=1&playlist=gKmO0RjeE1g" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
        </div>
      </div>
      <div className="signin-form">
        <h3>Log In</h3>
        <form onSubmit={this.handleLoginSubmit}>
          <label for="username">Username </label>
          <input type="text" id="username" name="username" placeholder="Username..." onChange={this.handleUsernameChange}/><br></br>
          <label for="password">Password </label>
          <input type="password" id="password" name="password" placeholder="Password..." onChange={this.handlePasswordChange}/><br></br>
          <input type="submit" value="Submit"/>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>)
  }


}

export default withRouter(connect(null, {loginUser})(SignIn))
