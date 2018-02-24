import React from 'react'

const SignIn = () => {

  return (
    <div>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username..."/><br></br>
        <label for="password">Password</label>
        <input type="text" id="password" name="password" placeholder="Password..."/><br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )


}

export default SignIn
