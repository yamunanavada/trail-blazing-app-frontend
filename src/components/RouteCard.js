import React from 'react'
import MiniMap from './MiniMap'

const RouteCard = (props) => {
  console.log(props)


  return (

    <div className="route-card">
      <MiniMap markers={props.route.markers} lat={props.route.startingcityLat} lng={props.route.startingcityLng}/>
      <div className="route-card-description-container">
        <h1>{props.route.name}</h1>
        <p>Description: {props.route.description}</p>
        <p>Distance: {props.route.distance} meters</p>
        <p>Difficulty: {props.route.difficulty}</p>
      </div>

    </div>
  )

}

export default RouteCard
