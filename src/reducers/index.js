import { combineReducers } from 'redux'
import manageStartingCity from './manageStartingCity'
import setWaypoints from './setWaypoints'

export default combineReducers({
  manageStartingCity, setWaypoints
})
