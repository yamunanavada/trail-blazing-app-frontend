/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle, withHandlers, withState } from "recompose"
import { connect } from 'react-redux'
import { updateWaypoints } from '../actions'

  // withState('waypoints', 'setWaypoints',[]), --> was originally addded to deal with event handlers. lets see if we get the redux to work firsst.

const Map = compose(
    withProps({
      googleMapURL: "",
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
        console.log(nextProps)
      const waypoints = () => {
        return nextProps.waypoints.map(waypoint => ({location: new google.maps.LatLng(waypoint.lat, waypoint.lng)}))
      }


      console.log("waypoints", waypoints())

      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6412600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: waypoints()
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
