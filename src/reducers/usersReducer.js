export default function usersReducer(state = { user: {}, savedRoutes: [], userRoutes: [], errorMessage: ""}, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)

      return {...state, user: action.payload.user, savedRoutes: action.payload.saved_routes, userRoutes: action.payload.user_routes} ;

    case "CLEAR_CURRENT_USER":
      localStorage.clear()
      return {...state, user: null, savedRoutes: [], userRoutes: [], errorMessage: ""}

    case "ADD_SAVED_ROUTE_TO_USER":
    // need o add from userRoutes too
      return {...state, savedRoutes: [...state.savedRoutes, action.payload]}
    case "DELETE_SAVED_ROUTE_FROM_USER":
    // need to delete from userRoutes too
      let routeToRemove = state.savedRoutes.indexOf(action.payload)
      return {...state, savedRoutes: [...state.savedRoutes.slice(0, routeToRemove), ...state.savedRoutes.slice(routeToRemove+1)]}
    case "UPDATE_SAVED_ROUTE":
      let updatedRoute = state.savedRoutes.indexOf(action.payload.route)
      let updatedUserRoute = state.userRoutes.indexOf(state.userRoutes.filter(route => route.id === action.payload.userRoute.id)[0])

      return {...state, savedRoutes: [...state.savedRoutes.slice(0, updatedRoute), action.payload.route, ...state.savedRoutes.slice(updatedRoute+1)], userRoutes: [...state.userRoutes.slice(0, updatedUserRoute), action.payload.userRoute, ...state.userRoutes.slice(updatedUserRoute+1)]}

    default:
      return state
  }
}
