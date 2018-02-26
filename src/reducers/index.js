import { combineReducers } from 'redux'
import manageStartingCity from './manageStartingCity'
import mapReducer from './mapReducer'

export default combineReducers({
  manageStartingCity, mapReducer
})
