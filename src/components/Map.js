/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle, withHandlers, withState } from "recompose"
import { connect } from 'react-redux'
import { updateWaypoints } from '../actions'

  // withState('waypoints', 'setWaypoints',[]), --> was originally addded to deal with event handlers. lets see if we get the redux to work firsst.

const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className="map-container" />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withHandlers({
      handleClick: props => event => {
        console.log(event)
        let newLat = event.latLng.lat()
        let newLng = event.latLng.lng()
        props.updateWaypoints({lat: newLat, lng: newLng})
        console.log("this is props.waypoints", props.waypoints)
      }
    }),
    lifecycle({
      shouldComponentUpdate(nextProps){
        // console.log(nextProps)
        // First convert the waypoints into google maps latlng objects
        const waypoints = () => {
          return nextProps.waypoints.map(waypoint => ({location: new google.maps.LatLng(waypoint.lat, waypoint.lng)}))
        }
        let waypointsGoogle = waypoints()
        let middlepoints = waypointsGoogle.slice(1,waypointsGoogle.length-1)
        // create a new directsion service request
        const DirectionsService = new google.maps.DirectionsService();
        // send the waypoints to the direction service request
        DirectionsService.route({
          origin: waypointsGoogle[0],
          destination: waypointsGoogle[waypointsGoogle.length-1],
          travelMode: google.maps.TravelMode.WALKING,
          waypoints: middlepoints
        }, (result, status) => {
          console.log(result)
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        })
        return true
      }
  }),
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={10}
      center={{ lat: props.startingCityCoords.lat, lng: props.startingCityCoords.lng}}
      onClick={props.handleClick}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  )

const mapStateToProps = (state) => {
  return {
    startingCityCoords: state.manageStartingCity.startingCityCoords,
    waypoints: state.setWaypoints.waypoints}
}

export default connect(mapStateToProps, {updateWaypoints})(Map)
