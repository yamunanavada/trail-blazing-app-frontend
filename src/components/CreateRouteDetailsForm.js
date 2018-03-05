import React from "react"


const CreateRouteDetailsForm = (props) => {

  return (
    <div className="create-route-form">
      <h3>What's your route?</h3>
        <form id="create-route-form-form" onSubmit={props.onFormSubmit}>
          <label for="routename">Name Your Route</label><br></br>
          <input type="text" id="routename" name="route_name" placeholder="Name of Route..." onChange={props.onInputChange}/><br></br>

          <label for="routedescription">Description</label><br></br>
          <input type="textarea" id="routedescription" name="route_description" placeholder="Description of Route.." onChange={props.onInputChange}/><br></br>

          <label for="difficulty">Difficulty Level</label><br></br>
          <select type="text" id="difficulty" name="difficulty" onChange={props.onInputChange}>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
          <input type="submit" value="Submit"/>
        </form>
    </div>
  )

}


export default CreateRouteDetailsForm
