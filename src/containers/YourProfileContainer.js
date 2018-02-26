import React from "react";
import YourProfileDetails from '../components/YourProfileDetails'
import SavedRoutesContainer from './SavedRoutesContainer'


class YourProfileContainer extends React.Component {


  render() {
    return (
      <div className="profile-container">
        <div className="page-title-bar" >
          <h1>Your Profile</h1>
        </div>
        <YourProfileDetails />
        <SavedRoutesContainer />
      </div>

    )
  }
 }
export default YourProfileContainer
