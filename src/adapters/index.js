// //Adapters allow us to abstract out repetitive code, such as the base url and headers
const baseUrl = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('jwt')
function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem('jwt')
  };
}

export class RestfulAdapter {
  static indexFetch(route) {
    return fetch(`${baseUrl}/${route}`, getRequest()).then(responseHandler);
  }
  static showFetch(route, id) {
    return fetch(`${baseUrl}/${route}/${id}`, getRequest()).then(
     responseHandler
    );
  }
  static createFetch(route, body) {
    return fetch(`${baseUrl}/${route}`, postRequest(body))
    .then(responseHandler)
  }
  static editFetch(route, id, body) {
    return fetch(`${baseUrl}/${route}/${id}`, patchRequest(body)).then(
      responseHandler
    );
  }
  static deleteFetch(route, id) {
    return fetch(`${baseUrl}/${route}/${id}`, {
      method: "DELETE",
      headers: headers()
    }).then(responseHandler);
  }
}

//these may not be necessary, but if you're setting up a variety of get, post,
//and patch requests, it may be helpful to abstract their structure as well:
function getRequest() {
  return {
    headers: headers()
  };
}

function patchRequest(body) {
  return {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

function postRequest(body) {
  return {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

//this is a very basic error handling function.  API responses come with a key,
//response.ok, which will be true if the status is below 400 and false if above.
function responseHandler(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("ERROR", response.json());
    }
}


export class LoggedIn {
  static getLoggedInUser = () => {
    return fetch(`${baseUrl}/get_current_user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem('jwt')
      }
    }).then(res => {
      console.log(res.json())
      return res.json()
    })

  }
}


export class GoogleMapAdapter {

  static fetchStaticGoogleMaps = (address) => {

    let cleanAddress = address.split(' ').join('%20')
    const apiKey = process.env.REACT_APP_API_KEY
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?&address=${cleanAddress}&key=${apiKey}`
    return fetch(URL).then(res => res.json())
  }
}

export class SavedRouteAdapter {
  static deleteSavedRoute = (body) => {
    return fetch(`${baseUrl}/destroy_favorite`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem('jwt')
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  static updateSavedRoute = (body) => {
    return fetch (`${baseUrl}/update_favorite`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem('jwt')
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
}
