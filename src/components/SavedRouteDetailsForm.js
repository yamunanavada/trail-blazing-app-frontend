import React from "react";
import { connect } from 'react-redux'
import { updateSavedRoute } from '../actions'

class SavedRouteDetailsForm extends React.Component {

  state = {
    rating: 3,
    comment: ""
  }

  handleButtonClick = () => {
      let modal = document.getElementsByClassName("modal")[0]
      modal.style.display="none"
    }

  handleSavedRouteUpdateSubmit = (event) => {
    event.preventDefault()
    console.log(event)

    let body = {
      user_id: this.props.userId,
      route_id: this.props.route.id,
      rating: this.state.rating,
      comment: this.state.comment
    }

    this.props.updateSavedRoute(this.props.route, body)
    let modal = document.getElementsByClassName("modal")[0]
    modal.style.display="none"

  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render(){
    return (
      <div className="modal-content">
        <p className="close" onClick={this.handleButtonClick}> X </p>
        <h3> Please describe your experience running this route. </h3>
        <form onSubmit={this.handleSavedRouteUpdateSubmit}>
          <label for="rating"> Rating </label>
          <input type="number" name="rating" placeholder="Rating (1 - 5) ..." onChange={this.handleInputChange}/><br></br>
          <label for="rating"> Comments </label>
          <input type="text" name="comment" placeholder="Comment..." onChange={this.handleInputChange}/><br></br>
          <input type="submit" value="submit" />
        </form>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {route: state.routeReducer.route,
  userId: state.usersReducer.user.id}
}

export default connect(mapStateToProps, {updateSavedRoute})(SavedRouteDetailsForm)
