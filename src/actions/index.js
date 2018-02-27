// //This is just one example of an adapter class for containing our fetches
import { RestfulAdapter } from "../adapters";


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
      debugger
      let filteredresults = res.filter(route => route.city.toLowerCase() === city.toLowerCase())
// COME BACK TO THIS I DONT THINK ITS WORKING!!!!!
      dispatch({type: "SEARCH_CITY", payload: {city: city, routes: filteredresults}})
    })
  }
}

export function getRouteForRoutePage(route){
  return { type: "ADD_ROUTE", payload: route }
}

export function convertWaypoints(markers){
  return { type: "CONVERT_WAYPOINTS", payload: markers}
}

export function clearRouteFromCreateMap(){
  return {type: "CLEAR_ALL"}
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
