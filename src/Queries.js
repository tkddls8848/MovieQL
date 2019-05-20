import gql from 'graphql-tag'

export const HOME_PAGE = gql`
{
    movies(limit:50, rating:8.0){
      id
      title
      rating
      genres
      medium_cover_image
    }
}
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId:String!){
    movie(id:$movieId){
      title
      medium_cover_image
      rating
      description_intro
    }
  }
`