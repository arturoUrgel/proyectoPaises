import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"; /* payload */
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const UPDATE_CONTINENT_FILTER = "UPDATE_CONTINENT_FILTER";
export const UPDATE_ORDER = "UPDATE_ORDER";

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
    .then((data) => dispatch({ type: GET_COUNTRY_DETAIL, payload: data }));
};

export const getAllActivities = () => (dispatch) => {
  return fetch("http://localhost:3001/activities")
    .then((response) => response.json())
    .then((data) => {
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: data,
      });
    });
};

export const updateContFilter = (payload) => (dispatch) => {
  return dispatch({
    type: UPDATE_CONTINENT_FILTER,
    payload: payload,
  });
};

export const updateOrder = (payload) => (dispatch) => {
  return dispatch({
    type: UPDATE_ORDER,
    payload: payload,
  });
};

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/activities", payload);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: json.data,
      });
    } catch (error) {
      if(error.response.data.error) throw `"${payload.name.toUpperCase()}" activity already exists`
      throw "Se produjo un error"
      
    }
  };
}

export function updateActivity(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.put("http://localhost:3001/activities", payload);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: json.data,
      });
    } catch (error) {
      if(error.response.data.error) throw `"${payload.name.toUpperCase()}" activity already exists`
      throw "Se produjo un error"
      
    }
  };
}
