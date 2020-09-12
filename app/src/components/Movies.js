import React from "react";
import { connect } from "react-redux";
import style from 'styled-components';
import Movie from "./Movie";

function Movies({ movies }) {
    const StyledSection = style.section`
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        background-color: rgba(255,255,255,.6);
        border-radius: 100px;
    `;

  return (
    <>
      <StyledSection>
        { movies.map( movie => {
            return <Movie key={ movie.id } movie={ movie } />
        })}
      </StyledSection>
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect( mapStateToProps, {})( Movies );