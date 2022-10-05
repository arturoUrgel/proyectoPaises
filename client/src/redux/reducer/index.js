import {
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  UPDATE_CONTINENT_FILTER,
  UPDATE_ORDER,
} from "../actions";

const initialState = {
  countries: [],
  countryDetail: {},
  orderFilter: { az: "asc", orderBy: "name" },
  contFilter: {
    Africa: true,
    Antarctica: true,
    Asia: true,
    Europe: true,
    North_America: true,
    Oceania: true,
    South_America: true,
  },
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
    case UPDATE_CONTINENT_FILTER:
      return {
        ...state,
        contFilter: {
          ...state.contFilter,
          [action.payload.name]: action.payload.checked,
        },
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orderFilter: {
          ...state.orderFilter,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
}
