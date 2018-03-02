import React from "react";
import YourProfileDetails from '../components/YourProfileDetails'
import SavedRoutesContainer from './SavedRoutesContainer'
import { connect } from 'react-redux'


class YourProfileContainer extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="profile-container">
        <div className="page-title-bar" >
          <h1>Your Profile </h1>
        </div>
        <YourProfileDetails user={this.props.user}/>
        <SavedRoutesContainer />
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
