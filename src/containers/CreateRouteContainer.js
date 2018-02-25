import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"


class CreateRouteContainer extends React.Component {

  state = {
    startingCity: '',
    startingCityCoords: {
      lat: 40.7128,
      lng: -74.0060
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

  // fetchStaticGoogleMaps = (address) => {
  //
  //   let cleanAddress = address.split(' ').join('%20')
  //   const apiKey = process.env.REACT_APP_API_KEY
  //   const URL = `https://maps.googleapis.com/maps/api/geocode/json?&address=${cleanAddress}&key=${apiKey}`
  //   return fetch(URL).then(res => res.json())
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
    console.log(event)
    this.setState({
      startingCity: event.target.value
    }, console.log(this.state))

  }

  handleCityInput = (event) => {
    console.log(event.target.value)
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
export default CreateRouteContainer
