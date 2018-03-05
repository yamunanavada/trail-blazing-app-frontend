import React from 'react'
import { connect } from 'react-redux'
import ShowRouteMap from './ShowRouteMap'
import { convertWaypoints } from '../actions'
import SavedRouteDetailsForm from './SavedRouteDetailsForm'

const RoutePage = (props) => {

  const handleButtonClick = () => {
    let modal = document.getElementsByClassName("modal")[0]
    modal.style.display="block"

  }

  const handleDistanceCalculation = () => {
    return (props.route.distance * 0.621371 / 1000).toFixed(1)

  }

  const ratingAndComments = () => {
    let currentRoute = props.userRoutes.filter(userroute => userroute.route_id === props.route.id)[0]

    if(!!currentRoute.rating && !!currentRoute.comment){
      return (<div>
        <p><b> Your Rating: </b> {currentRoute.rating}</p>
        <p><b> Your Comments: </b> {currentRoute.comment}</p>
      </div>)
    } else {
      return (<div>
        <p><b> Your Rating: </b> You have not rated this route. </p>
        <p><b> Your Comments: </b> You have not commented on this route.</p>
      </div>)

    }

  }


  return (

    <div className="route-page-container">
      <div className="page-title-bar">
        <h1> {props.route.name} </h1>
        <h2> {props.route.city} </h2>
      </div>
      <ShowRouteMap waypoints={props.route.markers}/>
      <div className="route-page-description-container">
        <p><b>Description: </b> {props.route.description}</p>
        <p><b>Distance: </b> Approximately {handleDistanceCalculation()} miles</p>
        <p><b>Difficulty Level: </b> {props.route.difficulty}</p>
        <div>{ratingAndComments()}</div>
      <button id="update-saved-route-btn" onClick={handleButtonClick}> Update Your Rating  </button>
      <div className="modal">
        <SavedRouteDetailsForm />
      </div>

      </div>

    </div>

  )

}

const mapStateToProps = (state) => {
  return {route: state.routeReducer.route,
    waypoints: state.mapReducer.waypoints,
  userRoutes: state.usersReducer.userRoutes}
}

export default connect(mapStateToProps, { convertWaypoints })(RoutePage)
