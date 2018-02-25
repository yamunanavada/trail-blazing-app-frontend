/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle, withHandlers } from "recompose"
import { connect } from 'react-redux'

const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className="map-container" />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: props.startingCityCoords.lat, lng: props.startingCityCoords.lng}}
    >
    </GoogleMap>
  )

const mapStateToProps = (state) => {
  return {startingCityCoords: state.startingCityCoords}
}

export default connect(mapStateToProps)(Map)
