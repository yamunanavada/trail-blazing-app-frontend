import React from "react";
import { connect } from "react-redux"
import CitySearch from '../components/CitySearch'



class FindRoutesContainer extends React.Component {

  state = {
    city: ""
  }


  render() {
    return (

      <div className="trail-container">
        <div className="page-title-bar">
          <h1>Find a Route</h1>
        </div>
        <CitySearch />
      </div>
    )
  }
 }
export default FindRoutesContainer
