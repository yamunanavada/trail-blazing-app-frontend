// //Adapters allow us to abstract out repetitive code, such as the base url and headers
// const baseUrl = `http://localhost:3000/`;


function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
}
//
// export class RestfulAdapter {
//   static indexFetch(route) {
//     return fetch(`${baseUrl}/${route}`, getRequest()).then(responseHandler);
//   }
//   static showFetch(route, id) {
//     return fetch(`${baseUrl}/${route}/${id}`, getRequest()).then(
//       responseHandler
//     );
//   }
//   static createFetch(route, body) {
//     return fetch(`${baseUrl}/${route}`, postRequest(body)).then(
//       responseHandler
//     );
//   }
//   static editFetch(route, id, body) {
//     return fetch(`${baseUrl}/${route}/${id}`, patchRequest(body)).then(
//       responseHandler
//     );
//   }
//   static deleteFetch(route, id) {
//     return fetch(`${baseUrl}/${route}/${id}`, {
//       method: "DELETE",
//       headers: headers()
//     }).then(responseHandler);
//   }
// }

export class GoogleMapAdapter {

  static fetchStaticGoogleMaps = (address) => {

    let cleanAddress = address.split(' ').join('%20')
    const apiKey = 
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?&address=${cleanAddress}&key=${apiKey}`
    return fetch(URL).then(res => res.json())
  }
}
