export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"; /* payload */
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";


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
    .then((data) => dispatch({ type: GET_COUNTRY_DETAIL, payload: data }))
};

export const getAllActivities = () => (dispatch) => {
  return fetch("http://localhost:3001/activities")
    .then((response) => response.json())
    .then((data) =>{
      console.log("Estado redux",data)
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: data,
      })}
    );
};
