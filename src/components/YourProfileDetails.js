import React from 'react'

const YourProfileDetails = (props) => {
  console.log(props)

  return (
    <div id="profile-description">
      HEY DOES THIS FUCKING WORK
      <h3> {props.user.first_name + " " + props.user.last_name}</h3>
    </div>
  )

}

export default YourProfileDetails
