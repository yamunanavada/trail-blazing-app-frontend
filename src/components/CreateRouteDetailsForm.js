import React from "react"

const CreateRouteDetailsForm = () => {

  return (
    <div className="create-route-form">
      <h3>Name of City</h3>
        <form action="/action_page.php">
          <label for="routename">First Name</label>
          <input type="text" id="routename" name="route_name" placeholder="Name of Route..."/><br></br>

          <label for="routedescription">Last Name</label>
          <input type="text" id="routedescription" name="route_description" placeholder="Description of Route.."/><br></br>

          <label for="difficulty">Difficulty Level</label>
          <select id="difficulty" name="diffulty">
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
