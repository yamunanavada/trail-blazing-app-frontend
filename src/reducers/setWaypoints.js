export default function setWaypoints(
  state = {
    waypoints: []
  }, action){
    switch(action.type){
      case "ADD_WAYPOINT":
        console.log("previous state:", state)
        console.log("action", action.payload)
        return state = {
          ...state,
          waypoints: [...state.waypoints, action.payload]
        }

      default:
        return state;
    }
  }
