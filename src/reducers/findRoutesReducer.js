export default function findRoutesReducer(
  state = {
    city: "",
    routes: []
  }, action
){
  switch(action.type){
    case "SEARCH_CITY":
      return state = {
        ...state,
        city: action.payload.city,
        routes: action.payload.routes
      }

    default:
      return state
  }
}
