import React from "react";
import { connect } from "react-redux"
import ProfileRouteCard from '../components/ProfileRouteCard'
import SavedCitySearch from '../components/SavedCitySearch'


class SavedRoutesContainer extends React.Component {
  state = {
    city: "",
    distance: "",
    difficulty: ""
  }

  handleDistanceFilter = () => {
    switch(this.state.distance){
      case "short":
        return this.props.savedRoutes.filter(route => route.distance < 4828);
      case "medium":
        return this.props.savedRoutes.filter(route => route.distance >=4828 && route.distance < 9656.06);
      case "long":
        return this.props.savedRoutes.filter(route => route.distance >=9656.06 && route.distance < 16093.4);
      case "superlong":
        return this.props.savedRoutes.filter(route => route.distance >= 16093.4 );
      default:
        return this.props.savedRoutes;
    }
  //
  //   if (this.state.distance === "short"){
  //     return this.props.savedRoutes.filter(route => route.distance < 4828)
  //   } else if (this.state.distance === "medium"){
  //     return this.props.savedRoutes.filter(route => route.distance >=4828 && route.distance < 9656.06)
  //   } else if (this.state.distance === "long"){ return this.props.savedRoutes.filter(route => route.distance >=9656.06 && route.distance < 16093.4)
  // } else if (this.state.distance === "superlong"){
  //     return this.props.savedRoutes.filter(route => route.distance >= 16093.4 )
  //   } else {
  //     return this.props.savedRoutes
  //   }
  }

  createRouteCards = () => {

    if (this.props.savedRoutes.length === 0 ){
      return (<div id="no-routes-box"><h2></h2></div>)
    } else if(this.state.city != "" && this.props.savedRoutes.length === 0 ){
      return (<div id="no-routes-box">NO ROUTES FOUND!</div>)
    } else {

      let filteredRoutes = this.handleDistanceFilter().filter(route => route.city.toLowerCase().includes(this.state.city.toLowerCase()))
      return filteredRoutes.filter(route => route.difficulty.includes(this.state.difficulty)).map(route => <ProfileRouteCard key={filteredRoutes.indexOf(route)} route={route}/>)

    }
  }


  handleCityChange = (event) => {
    event.preventDefault()
    this.setState({
      city: event.target.value
    }, console.log(this.state))
  }

  handleCitySubmit = (event) => {
    event.preventDefault()

  }

  handleFilterChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <div className="profile-saved-routes-container">
        <SavedCitySearch onFilterChange={this.handleFilterChange} onCityChange={this.handleCityChange} onCitySubmit={this.handleCitySubmit}/>
        <div className="profile-route-cards">{this.createRouteCards()}</div>

      </div>

    )
  }
 }


const mapStateToProps = (state) => {
  return { savedRoutes: state.usersReducer.savedRoutes }
}
export default connect(mapStateToProps, null)(SavedRoutesContainer)
