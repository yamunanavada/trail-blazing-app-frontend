export default function manageStartingCity(
  state = {
    startingCity: 'New York, NY',
    startingCityCoords: {
      lat: 40.7128,
      lng: -74.0060
    }
  }, action){
    switch (action.type){
      case "ADD_CITY":
        console.log("previous state:", state)
        console.log("action", action.payload)
        return Object.assign({}, state, {startingCity: action.startingCity, startingCityCoords: {
          lat: action.payload.startingCityCoords.lat,
          lng: action.payload.startingCityCoords.lng
        }})

      default:
        return state
    }
  }
