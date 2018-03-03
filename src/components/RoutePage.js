import React from 'react'
import { connect } from 'react-redux'
import ShowRouteMap from './ShowRouteMap'
import { convertWaypoints } from '../actions'

const RoutePage = (props) => {
  console.log(props.route)
  // Eventually when a new route is created, a redirect must happen to get to this page

  // const convertedWayPointsFromString = () => {
  //   debugger
  //   let x = props.route.markers.split(',').map(obj => JSON.parse(obj))
  //   console.log(x)
  //   props.convertWaypoints(x)
  // }

  return (

    <div className="route-page-container">
      <div className="page-title-bar">
        <h1> {props.route.name} </h1>
        <h2> {props.route.city} </h2>
      </div>
      <ShowRouteMap waypoints={props.route.markers}/>
      <div className="route-page-description-container">
        <p><b>Description: </b> {props.route.description}</p>
        <p><b>Distance: </b> {props.route.distance} meters</p>
        <p><b>Difficulty Level: </b> {props.route.difficulty}</p>
      </div>
    </div>

  )

}

const mapStateToProps = (state) => {
  return {route: state.routeReducer.route,
    waypoints: state.mapReducer.waypoints}
}

export default connect(mapStateToProps, { convertWaypoints })(RoutePage)
