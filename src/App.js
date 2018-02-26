import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import SignIn from "./components/SignIn"
import CreateRouteContainer from "./containers/CreateRouteContainer"
import TrailBlazingContainer from './containers/TrailBlazingContainer'
import FindRoutesContainer from "./containers/FindRoutesContainer"
import YourProfileContainer from "./containers/YourProfileContainer"

class App extends Component {
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
        </Switch>
      </div>

    );
  }
}

export default App;
