import gql from 'graphql-tag'

export const HOME_PAGE = gql`
{
    movies(limit:50, rating:8.0){
      id
      title
      rating
      medium_cover_image
    }
}
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId:String!){
    movie(id:$movieId){
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id:$movieId){
      id
      title
      rating
      medium_cover_image
    }
  }
`