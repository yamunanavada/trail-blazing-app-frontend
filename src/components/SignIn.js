import React from 'react'

const SignIn = () => {

  // <div class="video-background">
  //   <div class="video-foreground">
  //       <iframe src="https://youtube.com/embed/gKmO0RjeE1g?autoplay=1&controls=0&showinfo=0&autohide=1" frameborder="0" allowfullscreen loop="true"></iframe>
  //   </div>
  // </div>

  return (
    <div>
      <div className="signin-form">
        <h3>Log In</h3>
        <form>
          <label for="username">Username </label>
          <input type="text" id="username" name="username" placeholder="Username..."/><br></br>
          <label for="password">Password </label>
          <input type="text" id="password" name="password" placeholder="Password..."/><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )


}

export default SignIn
