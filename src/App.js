import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrailBlazingContainer from './containers/TrailBlazingContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TrailBlazingContainer />
      </div>

    );
  }
}

export default App;
