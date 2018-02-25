// export default function manageUsers(
//   state = {
//     users: []
//   }, action){
//   switch (action.type) {
//     case "ADD_USER":
//       return Object.assign({}, state, {users: state.users.concat(action.user)});
//
//     default:
//       return state
//     }
//
// }

export default function manageStartingCity(
  state = {
    startingCity: '',
    startingCityCoords: {
      lat: 40.7128,
      lng: -74.0060
    }
  }, action{
    switch (action.type){
      case "ADD_CITY":
        return Object.assign({}, state, {startingCity: action.startingCity, startingCityCoords: {
          lat: action.lat,
          lng: action.lng
        }})

      default:
        return state
    }
  }

)
