import React from "react";
import { connect } from "react-redux"
import NavBar from "../components/NavBar"
import CreateRouteContainer from "./CreateRouteContainer"
import SignIn from '../components/SignIn'

class TrailBlazingContainer extends React.Component {


  render() {
    return (
      <div >
        <CreateRouteContainer />
      </div>

    )
  }
 }
export default TrailBlazingContainer
