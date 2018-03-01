export default function usersReducer(state = { user: null , errorMessage: ""}, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, user: action.payload.user}
    default:
      return state
  }
}
