import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"


class CreateRouteContainer extends React.Component {

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

  render() {
    return (
      <div className="create-container">
        <div className="page-title-bar" >
          <h1>Create a Route</h1>
        </div>
        <Map />
        <CreateRouteDetailsForm />
      </div>

    )
  }
 }
export default CreateRouteContainer
