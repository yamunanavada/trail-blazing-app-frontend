import React from "react";
import { connect } from "react-redux"
import RouteCard from '../components/RouteCard'


class SavedRoutesContainer extends React.Component {

  // new routes a user saves is not adding to the list - we need to fix this bug.
  createRouteCards = () => {
    
    return this.props.savedRoutes.map( route => <RouteCard route={route} />)
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
