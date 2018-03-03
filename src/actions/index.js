// //This is just one example of an adapter class for containing our fetches
import { RestfulAdapter, LoggedIn } from "../adapters";


export function updateStartingCity(citydata) {
  return { type: "ADD_CITY", payload: citydata }
}

export function updateWaypoints(waypoint){
  return { type: "ADD_WAYPOINT", payload: waypoint}
}


export function updateDistance(distance){
  return { type: "ADD_DISTANCE", payload: distance }
}

export function getRoutesFromSearch(city){
  return dispatch => {
    RestfulAdapter.indexFetch("routes")
    .then(res => {
      let filteredresults = res.filter(route => route.city.toLowerCase() === city.toLowerCase())
      dispatch({type: "SEARCH_CITY", payload: {city: city, routes: filteredresults}})
    })
  }
}

export function getRouteForRoutePage(route){
  return { type: "ADD_ROUTE", payload: route }
}

export function clearRouteforRoutePage(){
  return { type: "CLEAR_ROUTE"}
}

export function convertWaypoints(markers){
  return { type: "CONVERT_WAYPOINTS", payload: markers}
}

export function clearRouteFromCreateMap(){
  return {type: "CLEAR_ALL"}
}

export function clearRoutesFromSearch(){
  return {type: "CLEAR_SEARCH"}
}

// export function fetchHobsWithJobs() {
//   //using thunk, we return are returning a function here instead of
//   //a plain object.  Thunk intercepts this returned value, and if it is a
//   //function, cancels the normal event of calling our reducers, and
//   //instead, passes in 'dispatch' as an argument to the function.
//   //the fetch request was extracted out to our adapter, but still functions the same
//   return dispatch => {
//     dispatch({ type: "HOBBITS_LOADING" });
//     RestfulAdapter.indexFetch("hobbits").then(data => {
//       dispatch({ type: "HOBBIT_LOAD", payload: data });
//     });
//   };
// }

export function loginUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: { username: username, password: password}})
    })
    .then(response => response.json())
    .then(userData => dispatch(setCurrentUser(userData)))
  }
}

export function getLoggedInUser() {
  return dispatch => {
    // grab that function getLoggedinUser, and with the data do a dispatch(setCurrentUser(userData)), else render login page
    LoggedIn.getLoggedInUser().then(res => {
      console.log(res)
      return dispatch => {
        dispatch(setCurrentUser(res))
      }
    })
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}

export function clearCurrentUser() {
  return {type: "CLEAR_CURRENT_USER"}
}

export function saveRoute(saveRoute){
  return {type: "SAVE_ROUTE", payload: saveRoute}
}
