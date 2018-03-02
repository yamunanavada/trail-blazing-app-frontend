import React from 'react'
import MiniMap from './MiniMap'
import { RestfulAdapter } from '../adapters'
import { connect } from 'react-redux'
import { saveRoute } from '../actions'

class RouteCard extends React.Component {
  // this may need a clicked state

  state = {
    clicked: false,
    color: "grey"
  }




  handleHeartClick = (event) => {
    console.log(event)
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
      })

    } else {
      this.setState({
        clicked: false,
        color: "grey"
      })

      RestfulAdapter.deleteFetch("saved_routes", body)

    }

  }

  // handleHeartColor = () => {
  //   if (!this.state.clicked){
  //     return {"color:grey;"}
  //   } else {
  //     return {"color:pink;"}
  //   }
  // }


  render() {
    console.log(this.props)
    return (
      <div className="route-card">
        <MiniMap markers={this.props.route.markers} lat={this.props.route.startingcityLat} lng={this.props.route.startingcityLng}/>
        <div className="route-card-description-container">
          <h1>{this.props.route.name}</h1>
          <p>Distance: {this.props.route.distance} meters</p>
          <p>Difficulty: {this.props.route.difficulty}</p>
        </div>
        <div className="save-heart" onClick={this.handleHeartClick} style={{color:this.state.color}}> ❤︎ </div>
      </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {userId: state.usersReducer.user.id}
}

export default connect(mapStateToProps, {saveRoute})(RouteCard)
