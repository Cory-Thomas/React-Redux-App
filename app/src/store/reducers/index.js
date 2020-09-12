import {
    FETCH_MOVIES,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_SUCCESS
} from "../actions";
  
const initialState = {
    movies: [],
    loadingMovies: true,
    errorMessage: ""
};
  
export default ( state = initialState, action ) => {
    switch (action.type) {
      case FETCH_MOVIES:
        return {
          ...state,
          loadingMovies: true
        };
      case FETCH_MOVIES_ERROR:
        return {
          ...state,
          loadingMovies: false,
          errorMessage: action.payload.message
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loadingMovies: false
        };
      default:
        return state;
    };
};