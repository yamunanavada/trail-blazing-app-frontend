import { combineReducers } from 'redux'
import manageStartingCity from './manageStartingCity'
import mapReducer from './mapReducer'
import routeReducer from './routeReducer'
import findRoutesReducer from './findRoutesReducer'

export default combineReducers({
  manageStartingCity, mapReducer, routeReducer, findRoutesReducer
})
