import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import { withRouter } from 'react-router-dom'
import { RestfulAdapter } from '../adapters'

class SignUp extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    birthday: "",
    username: "",
    password: "",
    confirm_password: ""
  }


  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSignupSubmit = (event) => {
    event.preventDefault()

    let body = {user: {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      birthday: this.state.birthday,
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.confirm_password
    }
  }

    RestfulAdapter.createFetch("users", body)
    .then(res => {
      console.log(res)
      this.props.loginUser(this.state.username, this.state.password)
      this.props.history.push(`/findroutes`)
    })

  }

  render() {
    return (
      <div className="signin-component">
        <h1> Trail Blazin. </h1>
        <div class="video-background">
          <div class="video-foreground">
              <iframe src="https://youtube.com/embed/gKmO0RjeE1g?autoplay=1&loop=1&playlist=gKmO0RjeE1g" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
          </div>
        </div>
        <div className="signup-form">
          <h3>Sign Up</h3>
          <form onSubmit={this.handleSignupSubmit}>
            <label for="first_name">First Name </label>
            <input type="text" id="first_name" name="first_name" placeholder="First Name..." onChange={this.handleInputChange}/><br></br>
            <label for="last_name">Last Name </label>
            <input type="text" id="last_name" name="last_name" placeholder="Last Name..." onChange={this.handleInputChange}/><br></br>
            <label for="birthday">Birthday </label>
            <input type="date" id="birthday" name="birthday" onChange={this.handleInputChange}/><br></br>
            <label for="username">Username </label>
            <input type="text" id="username" name="username" placeholder="Username..." onChange={this.handleInputChange}/><br></br>
            <label for="password">Password </label>
            <input type="password" id="password" name="password" placeholder="Password..." onChange={this.handleInputChange}/><br></br>
              <label for="confirm_password">Confirm Password </label>
              <input type="password" id="confirm_password" name="confirm_password" placeholder="Password..." onChange={this.handleInputChange}/><br></br>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>

    )
  }

}

export default withRouter(connect(null,{loginUser})(SignUp))
