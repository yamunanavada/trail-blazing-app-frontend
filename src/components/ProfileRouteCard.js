import React from 'react'
import MiniMap from './MiniMap'
import { RestfulAdapter, SavedRouteAdapter } from '../adapters'
import { connect } from 'react-redux'
import { saveRoute, clearRouteforRoutePage, getRouteForRoutePage, saveRouteToUserFavorites, deleteRouteFromUserFavorites} from '../actions'
import { withRouter } from 'react-router-dom'

class ProfileRouteCard extends React.Component {
  // this may need a clicked state


  handleRemoveClick = (event) => {
    event.preventDefault()
    let body = {
      user_id: this.props.userId,
      route_id: this.props.route.id
    }
    SavedRouteAdapter.deleteSavedRoute(body)
    .then(res => {
      this.props.deleteRouteFromUserFavorites(this.props.route)

    })
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


  render() {

    return (
      <div className="route-card">
        <MiniMap markers={this.props.route.markers} lat={this.props.route.startingcityLat} lng={this.props.route.startingcityLng}/>
        <div className="route-card-description-container" onClick={this.handleCardClick}>
          <h1>{this.props.route.name}</h1>
          <p>Distance: Approximately {this.handleDistanceCalculation()} miles</p>
          <p>Difficulty: {this.props.route.difficulty}</p>
        </div>
        <div className="save-heart" onClick={this.handleRemoveClick} > X </div>
      </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {userId: state.usersReducer.user.id}
}

export default withRouter(connect(mapStateToProps, {saveRoute, clearRouteforRoutePage, getRouteForRoutePage, saveRouteToUserFavorites, deleteRouteFromUserFavorites})(ProfileRouteCard))
