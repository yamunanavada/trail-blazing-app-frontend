export default function usersReducer(state = { user: null , savedRoutes: [], errorMessage: ""}, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, user: action.payload.user, savedRoutes: action.payload.saved_routes} ;
    case "CLEAR_CURRENT_USER":
      localStorage.clear()
      return {...state, user: null, errorMessage: ""}
    case "ADD_SAVED_ROUTE_TO_USER":
      return {...state, savedRoutes: [...state.savedRoutes, action.payload]}
    case "DELETE_SAVED_ROUTE_FROM_USER":
    debugger
      let routeToRemove = state.savedRoutes.indexOf(action.payload)
      return {...state, savedRoutes: [...state.savedRoutes.slice(0, routeToRemove), ...state.savedRoutes.slice(routeToRemove+1)]}
    default:
      return state
  }
}
