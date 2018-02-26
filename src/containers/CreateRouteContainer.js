import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"
import { GoogleMapAdapter } from "../adapters"
import { connect} from 'react-redux'
import { updateStartingCity } from '../actions'
import { RestfulAdapter } from '../adapters'


class CreateRouteContainer extends React.Component {

  constructor(props){
    super(props)

    this. state = {
        startingCity: '',
        startingCityCoords: {
          lat: 40.7128,
          lng: -74.0060
        },
        newRouteDetails: {
          route_name: "",
          route_description: "",
          difficulty: "easy"
        }
      }
  }

  handleCitySubmit = (event) => {
    event.preventDefault();
    // this should be responsible for calling the fetch to get the coordinates of the starting city and send to the reducer to change state --> need these coordinates to be passed to the map container

    GoogleMapAdapter.fetchStaticGoogleMaps(event.target.citysearch.value)
    .then(res => this.setState({
      startingCityCoords: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}
    })).then( res => this.props.updateStartingCity(this.state))
  }

  handleCityInput = (event) => {
    event.preventDefault()
    this.setState({
      startingCity: event.target.value
    })
  }

  handleNewRouteChange = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      newRouteDetails: {
        ...this.state.newRouteDetails,
        [event.target.name]: event.target.value
      }
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    let body = {
      name: this.state.newRouteDetails.route_name,
      city: this.props.startingCity,
      description: this.state.newRouteDetails.route_description,
      markers: this.props.waypoints,
      difficulty: this.state.newRouteDetails.difficulty,
      distance: this.props.distance,
    }
    debugger

    // this should call a post fetch to the backend to save this route
    RestfulAdapter.createFetch("routes", body)

  }

  render() {
    console.log("props", this.props)
    console.log("state", this.state)
    return (
      <div className="create-container">
        <div className="page-title-bar" >
          <h1>Create a Route</h1>
            <h3>Search for a City</h3>
            <form onSubmit={this.handleCitySubmit}>
              <input type="text" id="citysearch" name="citysearch" placeholder="City..." onChange={this.handleCityInput}/><br></br>
              <input type="submit" value="Submit"/>
            </form>
        </div>
        <Map />
        <CreateRouteDetailsForm onInputChange={this.handleNewRouteChange} onFormSubmit={this.handleFormSubmit}/>
      </div>

    )
  }
 }

 const mapStateToProps = (state) => {
   // debugger;
   return { startingCity: state.manageStartingCity.startingCity,
     startingCityCoords: state.manageStartingCity.startingCityCoords,
     waypoints: state.mapReducer.waypoints,
     distance: state.mapReducer.distance
   }
 }

 // const mapDispatchToProps = (dispatch) => {
 //
 // }



export default connect(mapStateToProps, {updateStartingCity})(CreateRouteContainer)
