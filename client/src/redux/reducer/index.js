import {
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
} from "../actions";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };
      case CREATE_ACTIVITY:
        return {
            ...state,
        };
    default:
      return state;
  }
}
