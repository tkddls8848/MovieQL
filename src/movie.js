import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;
`;

const Movie = ({ id, title, rating, poster}) => (
    <Link to={`/detail/${id}/`}>
        <Card background={poster}>
            <Title>
                {title} || {rating}
            </Title>
        </Card>
    </Link>
);

Movie.propTypes = {
    id:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    rating:propTypes.number.isRequired,
    poster:propTypes.string.isRequired
}

export default Movie;