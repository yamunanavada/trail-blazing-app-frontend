import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"
import { GoogleMapAdapter } from "../adapters"
import { connect} from 'react-redux'
import { updateStartingCity, getRouteForRoutePage, saveRoute, saveRouteToUserFavorites } from '../actions'
import { RestfulAdapter } from '../adapters'
import { withRouter } from 'react-router-dom'


class CreateRouteContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        startingCity: '',
        startingCityCoords: {
          lat: 40.7128,
          lng: -74.0060
        },
        newRouteDetails: {
          route_name: "",
          route_description: "",
          difficulty: "Easy"
        }
      }
  }

  handleCitySubmit = (event) => {
    event.preventDefault();
    // this should be responsible for calling the fetch to get the coordinates of the starting city and send to the reducer to change state --> need these coordinates to be passed to the map container

    GoogleMapAdapter.fetchStaticGoogleMaps(event.target.citysearch.value)
      .then(res => this.setState({
        ...this.state,
        startingCityCoords: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}
        })
      ).then(res => {
          this.props.updateStartingCity(this.state)
      })
  }

  handleCityInput = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
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
    }, console.log(this.state.newRouteDetails))
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    let stringedMarkers = this.props.markers.map(point => `${point.lat}^${point.lng}`).join(",")

    let body = {
      name: this.state.newRouteDetails.route_name,
      city: this.props.startingCity,
      startingcityLat: this.props.startingCityCoords.lat,
      startingcityLng: this.props.startingCityCoords.lng,
      description: this.state.newRouteDetails.route_description,
      markers: stringedMarkers,
      difficulty: this.state.newRouteDetails.difficulty,
      distance: this.props.distance
    }
    // this should call a post fetch to the backend to save this route
    RestfulAdapter.createFetch("routes", body).then(res => {
      this.props.getRouteForRoutePage(res)
      let id = res.id
      let route = res
      console.log("this is a create fetch", route)

      let savedRouteBody = {
        user_id: this.props.user.id,
        route_id: id
      }
      RestfulAdapter.createFetch("saved_routes", savedRouteBody)
        .then(res => {
          this.props.saveRoute(route)
          this.props.saveRouteToUserFavorites(route)
          this.props.history.push(`/routes/${id}`)
        })

    })
    // may need to add a fetch to create a saved_route
    // Needs to redirect to Route Page
  }

  render() {
    return (
      <div className="create-container">
        <div className="page-title-bar" >
          <h1>Create a Route</h1>
        </div>
        <div className="search-city-form">
          <h3>Search for a City</h3>
          <form onSubmit={this.handleCitySubmit}>
            <input type="text" id="citysearch" name="citysearch" placeholder="City..." onChange={this.handleCityInput}/>
          </form>
        </div>

        <Map />
        <CreateRouteDetailsForm onInputChange={this.handleNewRouteChange} onFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
 }

 const mapStateToProps = (state) => {
   return { startingCity: state.manageStartingCity.startingCity,
     startingCityCoords: state.manageStartingCity.startingCityCoords,
     markers: state.mapReducer.waypoints,
     distance: state.mapReducer.distance,
     user: state.usersReducer.user
   }
 }


export default withRouter(connect(mapStateToProps, {updateStartingCity, getRouteForRoutePage, saveRoute, saveRouteToUserFavorites})(CreateRouteContainer))
