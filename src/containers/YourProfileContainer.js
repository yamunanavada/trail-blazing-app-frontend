import React from "react";
import YourProfileDetails from '../components/YourProfileDetails'
import SavedRoutesContainer from './SavedRoutesContainer'
import { connect } from 'react-redux'
import CitySearch from '../components/CitySearch'
import Footer from '../components/Footer'


class YourProfileContainer extends React.Component {

  state = {
    city: "",
  }

  handleCitySearchSubmit = (event) => {
    event.preventDefault()
  }

  handleCityChange = (event) =>{
    event.preventDefault();
    this.setState({
      city: event.target.value
    })

  }


  render() {
    console.log(this.props)
    return (
      <div className="profile-container">
        <div className="page-title-bar" >
          <h1>Your Profile </h1>
        </div>
        <YourProfileDetails user={this.props.user}/>

        <SavedRoutesContainer />
        <Footer />
      </div>


    )
  }
 }

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer.user
  }

}
export default connect(mapStateToProps, null)(YourProfileContainer)
