export default function savedRoutesReducer(state = { saved_routes: [] }, action) {
  switch (action.type) {
    case "SAVE_ROUTE":
      return {...state, saved_routes: [...state.saved_routes, action.payload]}
    default:
      return state
  }
}
