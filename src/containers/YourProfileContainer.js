import React from "react";
import YourProfileDetails from '../components/YourProfileDetails'


class YourProfileContainer extends React.Component {

  // this will need state - we need to be able to have a user search for a city, then pass the coordinates of that city off to the Map container

  render() {
    return (
      <div className="profile-container">
        <div className="page-title-bar" >
          <h1>Your Profile</h1>
        </div>
        <YourProfileDetails />
      </div>

    )
  }
 }
export default YourProfileContainer
