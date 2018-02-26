import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrailBlazingContainer from './containers/TrailBlazingContainer'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
            <Route exact path="/createroute" render={CreateRouteContainer} />
        <Route exact path="/login" render={TrailBlazingContainer} />
      </div>

    );
  }
}

export default App;
