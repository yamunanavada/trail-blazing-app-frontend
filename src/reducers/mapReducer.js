export default function mapReducer(
  state = {
    waypoints: [], distance: 0
  }, action){
    switch(action.type){
      case "ADD_WAYPOINT":
        return state = {
          ...state,
          waypoints: [...state.waypoints, action.payload]
        }
      case "ADD_DISTANCE":
        return state = {
          ...state,
          distance: state.distance + action.payload
        }
      case "CLEAR_ALL":
        return state = {
          waypoints: [], distance: 0
        }
      default:
        return state;
    }
  }
