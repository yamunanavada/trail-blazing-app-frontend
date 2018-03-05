import React from "react";
import { connect } from "react-redux"
import CitySearch from '../components/CitySearch'
import { getRoutesFromSearch, clearRoutesFromSearch } from '../actions'
import RouteCard from "../components/RouteCard"



class FindRoutesContainer extends React.Component {

  state = {
    city: ""
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

  createRouteCards = () => {
    if (this.props.routes.length === 0){
      return (<div id="no-routes-box"><h2>NO ROUTES FOUND!</h2></div>)
    } else {
      return this.props.routes.map(route => <RouteCard key={route.id} route={route}/>)
    }
  }

  componentDidMount(){
    this.props.clearRoutesFromSearch()

  }


  render() {
    return (

      <div className="trail-container">
        <div className="page-title-bar">
          <h1>Find a Route</h1>
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
