import React from "react";
import { connect } from "react-redux"
import NavBar from "../components/NavBar"
import CreateRouteContainer from "./CreateRouteContainer"

class TrailBlazingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        This is the TrailBlazingContainer!
        <CreateRouteContainer />
      </div>

    )
  }
 }
export default TrailBlazingContainer
