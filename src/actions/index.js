// //This is just one example of an adapter class for containing our fetches
// import { RestfulAdapter } from "../adapters";
//

export function updateStartingCity(citydata) {
  return { type: "ADD_CITY", payload: citydata }

}


export function updateWaypoints(waypoint){
  return { type: "ADD_WAYPOINT", payload: waypoint}
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
