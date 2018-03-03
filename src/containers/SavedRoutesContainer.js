import React from "react";
import { connect } from "react-redux"
import ProfileRouteCard from '../components/ProfileRouteCard'


class SavedRoutesContainer extends React.Component {

  // new routes a user saves is not adding to the list - we need to fix this bug.
  createRouteCards = () => {

    return this.props.savedRoutes.map( route => <ProfileRouteCard route={route} />)
  }

  render() {
    return (
      <div className="profile-saved-routes-container">
        {this.createRouteCards()}
      </div>

    )
  }
 }


const mapStateToProps = (state) => {
  return { savedRoutes: state.usersReducer.savedRoutes }
}
export default connect(mapStateToProps, null)(SavedRoutesContainer)
