import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import SignIn from "./components/SignIn"
import CreateRouteContainer from "./containers/CreateRouteContainer"
import TrailBlazingContainer from './containers/TrailBlazingContainer'
import FindRoutesContainer from "./containers/FindRoutesContainer"
import YourProfileContainer from "./containers/YourProfileContainer"
import RoutePage from "./components/RoutePage"
import { getLoggedInUser } from "./actions"
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {

    const token = localStorage.getItem('jwt')
    if (token) {
      this.props.getLoggedInUser

    } else {
      console.log('no token!')
    }
  }



  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TrailBlazingContainer} />
          <Route exact path="/createroute" component={CreateRouteContainer} />
          <Route exact path="/yourprofile" component={YourProfileContainer} />
          <Route exact path="/findroutes" component={FindRoutesContainer} />
          <Route exact path="/login" component={SignIn} />
          <Route path="/routes/:id" component={RoutePage} />
        </Switch>
      </div>

    );
  }
}

export default withRouter(connect(null, {getLoggedInUser})(App));
