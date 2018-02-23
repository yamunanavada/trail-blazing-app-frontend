import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// const store = createStore(reducer, applyMiddleware(thunk))
// need to pass in store 

ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
