import React from "react"


const CreateRouteDetailsForm = (props) => {

  return (
    <div className="create-route-form">
      <h3>What's your route?</h3>
      <p>Search for a city and place markers on the map to start plotting your route.</p>
        <form id="create-route-form-form" onSubmit={props.onFormSubmit}>
          <label for="routename">Name Your Route</label><br></br>
          <input type="text" id="routename" name="route_name" placeholder="Name of Route..." onChange={props.onInputChange}/><br></br>

          <label for="routedescription">Description</label><br></br>
          <input type="textarea" id="routedescription" name="route_description" placeholder="Description of Route.." onChange={props.onInputChange}/><br></br>

          <label for="difficulty">Difficulty Level</label><br></br>
          <select className="select-box" type="text" id="difficulty" name="difficulty" onChange={props.onInputChange}>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
          <input type="submit" value="Submit"/>
        </form>
    </div>
  )

}


export default CreateRouteDetailsForm
