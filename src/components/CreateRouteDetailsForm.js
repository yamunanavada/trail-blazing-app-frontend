import React from "react"
import { connect } from 'react-redux'
import { RestfulAdapter } from '../adapters'


const CreateRouteDetailsForm = (props) => {

  return (
    <div className="create-route-form">
      <h3>What's your route?</h3>
        <form onSubmit={props.onFormSubmit}>
          <label for="routename">Name Your Route</label>
          <input type="text" id="routename" name="route_name" placeholder="Name of Route..." onChange={props.onInputChange}/><br></br>

          <label for="routedescription">Description</label>
          <input type="text" id="routedescription" name="route_description" placeholder="Description of Route.." onChange={props.onInputChange}/><br></br>

          <label for="difficulty">Difficulty Level</label>
          <select id="difficulty" name="diffulty" onChange={props.onInputChange}>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
          <input type="submit" value="Submit"/>
        </form>
    </div>
  )

}

const mapStateToProps = (state) => {
  return { waypoints: state.mapReducer.waypoints}
}

export default CreateRouteDetailsForm
