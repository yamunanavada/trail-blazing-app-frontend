import React from 'react'
import { connect } from 'react-redux'
import ShowRouteMap from './ShowRouteMap'
import { convertWaypoints, getRouteForRoutePage } from '../actions'
import { Redirect, withRouter } from 'react-router-dom'
import SavedRouteDetailsForm from './SavedRouteDetailsForm'
import { RestfulAdapter } from '../adapters'

const RoutePage = (props) => {
  console.log(props)

  const handleButtonClick = () => {
    let modal = document.getElementsByClassName("modal")[0]
    modal.style.display="block"

  }

  const handleDistanceCalculation = () => {
    return (props.route.distance * 0.621371 / 1000).toFixed(1)

  }

  const ratingAndComments = () => {
    let currentRoute = props.userRoutes.filter(userroute => userroute.route_id === props.route.id)[0]
    console.log(currentRoute)
    if(currentRoute === undefined || (!!currentRoute.rating === false && !!currentRoute.comment===false)){
      return (<div>
        <p className="description-headers">Your Rating<br></br>
        You have not rated this route. </p>
      <p className="description-headers"> Your Comments <br></br>
      You have not commented on this route.</p>
      </div>)
    } else {
      return (<div>
        <p className="description-headers"><b> Your Rating </b><br></br> {currentRoute.rating}</p>
        <p className="description-headers"><b> Your Comments </b> <br></br>{currentRoute.comment}</p>
      </div>)
    }

  }


    return (
      <div className="route-page-container">
        <div className="page-title-bar">

        </div>
        <div className="route-page-description-title">
          <h1> {props.route.name} </h1>
          <h2> {props.route.city} </h2>
        </div>
        <ShowRouteMap waypoints={props.route.markers}/>
        <div className="route-page-description-container">
          <h3>{props.route.name}</h3>
          <p>Description<br></br>
          {props.route.description}</p>
          <p className="description-headers"><b>Distance </b><br></br>
           Approximately {handleDistanceCalculation()} miles</p>
         <p className="description-headers">Difficulty Level<br></br>
          {props.route.difficulty}</p>
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

export default connect(mapStateToProps, { convertWaypoints, getRouteForRoutePage })(RoutePage)
