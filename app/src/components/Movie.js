import React from "react";
import styled from 'styled-components';

const Movie = ({ movie }) => {
    const StyledDiv = styled.div`
        width: 25%;
        text-align: center;
        padding: 2%;
        margin: 5% 2%;
        background-color: rgba(255,255,255,.8);
        border-radius: 100px;
    `;

  return (
    <StyledDiv>
        <h3>{ movie.title }</h3>
        <div><p>{ movie.description }</p></div>
        <div><p><strong>Director:</strong> { movie.director }</p></div>
        <div><p><strong>Producer:</strong> { movie.producer }</p></div>
        <div><p><strong>Release Date:</strong> { movie.release_date }</p></div>
    </StyledDiv>
  );
};

export default Movie;