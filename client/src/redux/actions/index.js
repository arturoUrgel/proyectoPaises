export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"; /* payload */
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";

/* export const getAllCountries = () => {
  console.log("paso por aca2");
  return function (dispatch) {
    return fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: json });
      });
  };
};
 */
export const getAllCountries = () => (dispatch) => {
  return fetch("http://localhost:3001/countries")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      })
    );
};

export const getCountryDetails = (id) => (dispatch) => {
  return fetch("http://localhost:3001/countries/" + id)
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: GET_COUNTRY_DETAIL, payload: data })
      //console.log(data)
    );
};
