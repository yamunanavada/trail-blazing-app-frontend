import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"
import { GoogleMapAdapter } from "../adapters"
import { connect} from 'react-redux'
import { updateStartingCity } from '../actions'


class CreateRouteContainer extends React.Component {

  constructor(props){
    super(props)

    this. state = {
        startingCity: '',
        startingCityCoords: {
          lat: 40.7128,
          lng: -74.0060
        }
      }
  }



  // this will need state - we need to be able to have a user search for a city, then pass the coordinates of that city off to the Map container

// Below is an example of how to interact with the store (dispatch function) given a change in the state within the compnoent itslef

  // state = {
  //   username: '',
  //   hometown: ''
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // here i believe is where the dispatch function should get called - once the form has been submited
  //   this.props.store.dispatch({
  //     type: "ADD_USER",
  //     user: this.state
  //   })
  // }
  //
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }



  // handleLocationSubmit = (e) => {
  //   e.preventDefault();
  //   let address = e.target.firstElementChild.value;
  //
  //   this.fetchStaticGoogleMaps(address).then(res => {
  //     this.setState({
  //       startingAddress: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}
  //     })
  //      this.searchAddressForPlaces(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng)
  //      .then(res => this.setState({
  //        searchResponse: res
  //      }))
  //   })
  // }

  handleCitySubmit = (event) => {
    event.preventDefault();
    // this should be responsible for calling the fetch to get the coordinates of the starting city and send to the reducer to change state --> need these coordinates to be passed to the map container

    GoogleMapAdapter.fetchStaticGoogleMaps(event.target.citysearch.value)
    .then(res => this.setState({
      startingCityCoords: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}
    })).then( res => this.props.updateStartingCity(this.state))
  }

  handleCityInput = (event) => {
    this.setState({
      startingCity: event.target.value
    })
  }

  render() {
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
        <CreateRouteDetailsForm />
      </div>

    )
  }
 }

 const mapStateToProps = (state) => {
   // debugger;
   return { startingCity: state.startingCity, startingCityCoords: state.startingCityCoords}
 }

 // const mapDispatchToProps = (dispatch) => {
 //
 // }



export default connect(mapStateToProps, {updateStartingCity})(CreateRouteContainer)
