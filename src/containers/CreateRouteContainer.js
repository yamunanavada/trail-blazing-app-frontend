import React from "react";
import Map from "../components/Map"
import CreateRouteDetailsForm from "../components/CreateRouteDetailsForm"


class CreateRouteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-container">
        <div className="page-title-bar" >
          <h1>Create a Route</h1>
        </div>
        <Map  />
        <CreateRouteDetailsForm />
      </div>

    )
  }
 }
export default CreateRouteContainer
