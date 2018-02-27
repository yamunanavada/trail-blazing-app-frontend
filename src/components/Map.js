/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap,  DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle, withHandlers } from "recompose"
import { connect } from 'react-redux'
import { updateWaypoints, updateDistance, clearRouteFromCreateMap } from '../actions'

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
        let newLat = event.latLng.lat()
        let newLng = event.latLng.lng()
        props.updateWaypoints({lat: newLat, lng: newLng})
      }
    }),
    lifecycle({


      componentDidMount() {
        this.props.clearRouteFromCreateMap()
      },
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
          if (status === google.maps.DirectionsStatus.OK) {
            // add a dispatch action here
            nextProps.updateDistance(result.routes[0].legs[result.routes[0].legs.length-1].distance.value)
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
    waypoints: state.mapReducer.waypoints,
    distance: state.mapReducer.distance}
}

export default connect(mapStateToProps, {updateWaypoints, updateDistance, clearRouteFromCreateMap})(Map)
