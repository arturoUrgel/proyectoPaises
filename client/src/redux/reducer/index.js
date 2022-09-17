import {
  GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL,
  /*  CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT_DETAIL, */
} from "../actions";

const initialState = {
  countries: [],
  countryDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
      case GET_COUNTRY_DETAIL:
        return {
          ...state,
          countryDetail: action.payload,
        };
    default:
      return state;
  }
}
