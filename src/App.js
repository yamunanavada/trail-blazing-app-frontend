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
import SignUp from './components/SignUp'
import authorize from './authorize'

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
    const AuthYourProfileContainer = authorize(YourProfileContainer);
    const AuthCreateRouteContainer = authorize(CreateRouteContainer);
    const AuthFindRoutesContainer = authorize(FindRoutesContainer);
    const AuthRoutePage = authorize(RoutePage);

    return (

      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TrailBlazingContainer} />
          <Route exact path="/createroute" component={AuthCreateRouteContainer} />
          <Route exact path="/yourprofile" component={AuthYourProfileContainer} />
          <Route exact path="/findroutes" component={AuthFindRoutesContainer} />
          <Route exact path="/login" component={SignIn} />
          <Route path="/routes/:id" component={AuthRoutePage} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>

    );
  }
}













export default withRouter(connect(null, {getLoggedInUser})(App));
