import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { manageStartingCity } from "./reducers"
import { BrowserRouter } from 'react-router-dom'

const store = createStore({manageStartingCity}, applyMiddleware(thunk))
// need to pass in store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
