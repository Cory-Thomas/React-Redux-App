import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIE";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIE_ERROR";

export const fetchMovies = () => {
  return ( dispatch ) => {
    dispatch({ type: FETCH_MOVIES });
    axios
      .get( "https://ghibliapi.herokuapp.com/films" )
        .then( response => {
            console.log( response.data );
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data })
        })
        .catch( error => {
            console.log( error );
            dispatch({
                type: FETCH_MOVIES_ERROR,
                payload: { message: "Movies did not load" }
         });
    });
    };
};