export default function routeReducer(
  state = {route: {}, convertedWaypoints: []}, action
){
  switch(action.type){
    case "ADD_ROUTE":
      debugger
      return state = {...state,
      route: action.payload};

    case "CLEAR_ROUTE":
      return state = {
        route: {}
      };
    case "CONVERT_WAYPOINTS":
      return state = {
        ...state,
        convertedWaypoints: action.payload
      };
    default:
      return state
  }

}
