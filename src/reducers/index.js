export default function manageStartingCity(
  state = {
    startingCity: '',
    startingCityCoords: {
      lat: 40.7128,
      lng: -74.0060
    }
  }, action){
    switch (action.type){
      case "ADD_CITY":
        console.log("previous state:", state)
        return Object.assign({}, state, {startingCity: action.startingCity, startingCityCoords: {
          lat: action.startingCityCoords.lat,
          lng: action.startingCityCoords.lng
        }})

      default:
        return state
    }
  }
