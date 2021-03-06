import React from 'react'
import MiniMap from './MiniMap'
import { RestfulAdapter } from '../adapters'
import { connect } from 'react-redux'
import { saveRoute, clearRouteforRoutePage, getRouteForRoutePage, saveRouteToUserFavorites, deleteRouteFromUserFavorites} from '../actions'
import { withRouter } from 'react-router-dom'

class RouteCard extends React.Component {
  // this may need a clicked state

  state = {
    clicked: false,
    color: "grey"
  }




  handleHeartClick = (event) => {
    // Should create or delete an instance of a saved route on the backend
    // depends on the state of the card
    let body = { saved_route: {
      user_id: this.props.userId,
      route_id: this.props.route.id
      }
    }

    if (!this.state.clicked){

      this.setState({
        clicked: true,
        color: "pink"
      })
      RestfulAdapter.createFetch("saved_routes", body)
      .then(res => {
        this.props.saveRoute(this.props.route)
        this.props.saveRouteToUserFavorites(this.props.route)
      })

    } else {
      this.setState({
        clicked: false,
        color: "grey"
      })

      RestfulAdapter.deleteFetch("saved_routes", this.props.route.id)
      .then(res => {
        this.props.deleteRouteFromUserFavorites(this.props.route)

      })

    }

  }

  handleCardClick = (event) => {
    event.preventDefault()
    this.props.clearRouteforRoutePage()
    this.props.getRouteForRoutePage(this.props.route)
    this.props.history.push(`/routes/${this.props.route.id}`)

  }

  handleDistanceCalculation = () => {
    return (this.props.route.distance * 0.621371 / 1000).toFixed(1)

  }

  handleRating = () => {
    let rating = {1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★"}
  }

  handleDifficulty = () => {
    return this.props.route.difficulty.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})

  }



  render() {
    console.log(this.props)
    return (
      <div className="route-card">

        <MiniMap markers={this.props.route.markers} lat={this.props.route.startingcityLat} lng={this.props.route.startingcityLng}/>

        <div className="route-card-description-container" onClick={this.handleCardClick}>
          <h2>{this.props.route.name}</h2>
          <p>{this.props.route.city}</p>
          <p>Approximately {this.handleDistanceCalculation()} miles </p>
          <p>{this.handleDifficulty()} run</p>
        </div>
        <div className="save-heart" onClick={this.handleHeartClick} style={{color:this.state.color}}> ❤︎ </div>

      </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {userId: state.usersReducer.user.id}
}

export default withRouter(connect(mapStateToProps, {saveRoute, clearRouteforRoutePage, getRouteForRoutePage, saveRouteToUserFavorites, deleteRouteFromUserFavorites})(RouteCard))
