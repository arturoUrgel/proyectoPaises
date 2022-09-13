import {
  GET_ALL_COUNTRIES,
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
    default:
      return state;
  }
}
