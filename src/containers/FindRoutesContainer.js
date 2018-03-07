import React from "react";
import { connect } from "react-redux"
import CitySearch from '../components/CitySearch'
import { getRoutesFromSearch, clearRoutesFromSearch } from '../actions'
import RouteCard from "../components/RouteCard"




class FindRoutesContainer extends React.Component {

  state = {
    city: "",
    distance: "",
    difficulty: ""
  }

  handleCitySearchSubmit = (event) => {
    event.preventDefault()
    this.props.getRoutesFromSearch(this.state.city)
  }

  handleCityChange = (event) =>{
    event.preventDefault();
    this.setState({
      city: event.target.value
    })

  }

  handleDistanceFilter = () => {
    if (this.state.distance === "short"){
      return this.props.routes.filter(route => route.distance < 4828)
    } else if (this.state.distance === "medium"){
      return this.props.routes.filter(route => route.distance >=4828 && route.distance < 9656.06)
    } else if (this.state.distance === "long"){ return this.props.routes.filter(route => route.distance >=9656.06 && route.distance < 16093.4)
  } else if (this.state.distance === "superlong"){
      return this.props.routes.filter(route => route.distance >= 16093.4 )
    } else {
      return this.props.routes
    }
  }

  createRouteCards = () => {
    if(this.state.city != "" && this.props.routes.length === 0 ){
      return (<div id="no-routes-box">NO ROUTES FOUND!</div>)
    } else {

      let filteredRoutes = this.handleDistanceFilter()
      return filteredRoutes.filter(route => route.difficulty.includes(this.state.difficulty)).map(route => <RouteCard key={route.id} route={route}/>)

    }
  }

  componentDidMount(){
    this.props.clearRoutesFromSearch()

  }

  handleFilterChange = (event)=> {
    event.preventDefault()
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))

  }



  render() {
    return (

      <div className="trail-container">
        <div className="page-title-bar">
          <h1>Find a Route</h1>
        </div>
        <div className="filters-find-page">
          <h3>Advanced Search</h3>
          <form>
              <label for="difficulty">Difficulty </label>
            <select type="text" id="difficulty" name="difficulty" onChange={this.handleFilterChange} >
              <option value="">All Levels</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select><br></br>
            <label for="distance">Distance </label>
            <select type="text" id="distance" name="distance" onChange={this.handleFilterChange}  >
              <option value="all">All Routes</option>
              <option value="short">Less than 3 miles</option>
              <option value="medium">3 to 6 miles</option>
              <option value="long">6 to 10 miles</option>
              <option value="superlong">Greater than 10 miles</option>
            </select>
          </form>

        </div>
        <CitySearch onCitySubmit={this.handleCitySearchSubmit} onCityChange={this.handleCityChange}/>
        <div className="route-card-container">
        {this.createRouteCards()}
        </div>

      </div>
    )
  }
 }

const mapStateToProps = (state) => {
  return {
    city: state.findRoutesReducer.city,
    routes: state.findRoutesReducer.routes
  }

}


export default connect(mapStateToProps, {getRoutesFromSearch, clearRoutesFromSearch})(FindRoutesContainer)
