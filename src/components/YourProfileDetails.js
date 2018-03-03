import React from 'react'

const YourProfileDetails = (props) => {

  return (
    <div id="profile-description">
      <h3> {props.user.first_name + " " + props.user.last_name}</h3>
    </div>
  )

}

export default YourProfileDetails
