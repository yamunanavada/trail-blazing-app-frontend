/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle } from "recompose"
// import { connect } from 'react-redux'


const MiniMap = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className="route-card-map-container" />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    lifecycle({
      componentDidMount(){
        let revertMarkers = this.props.markers.split(",").map(point => {
          let obj = {}
          obj.lat = parseFloat(point.split("^")[0])
          obj.lng = parseFloat(point.split("^")[1])
          return obj
        })

        if(revertMarkers.length > 0){
          const waypoints = () => {
            return revertMarkers.map(waypoint => ({location: new google.maps.LatLng(waypoint.lat, waypoint.lng)}))
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
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          })
        }
      }
    }),
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={13}
      center={{ lat: props.lat, lng: props.lng}}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  )


export default MiniMap
