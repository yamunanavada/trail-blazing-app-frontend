export default function mapReducer(
  state = {
    waypoints: [], distance: 0
  }, action){
    switch(action.type){
      case "ADD_WAYPOINT":
        return {
          ...state,
          waypoints: [...state.waypoints, action.payload]
        }
      case "ADD_DISTANCE":
        return {
          ...state,
          distance: state.distance + action.payload
        }
      case "CLEAR_ALL":
        return {
          waypoints: [], distance: 0
        }
      default:
        return state;
    }
  }
