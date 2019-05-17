import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movies from "./movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
<Container>
    <Query query={HOME_PAGE}>
        {({loading, data, error}) => {
                if (loading) {
                    return <span>loading wait</span>
                } else if (error) {
                    console.log(error)
                    return <span>error</span>            
                } else if (data) {
                    console.log(data)
                    return data.movies.map(movie => <Movies 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        rating={movie.rating}
                        poster={movie.medium_cover_image}
                    >{movie.title} || RATING = {movie.rating}</Movies>)
                } 
            }
        }
    </Query>
</Container>
)


export default Home