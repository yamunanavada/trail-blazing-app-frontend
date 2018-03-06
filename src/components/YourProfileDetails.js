import React from 'react'

const YourProfileDetails = (props) => {

  return (
    <div id="profile-description">
      <h1> {props.user.first_name + " " + props.user.last_name+ "'s"} Saved Routes</h1>
    </div>
  )


}

export default YourProfileDetails
