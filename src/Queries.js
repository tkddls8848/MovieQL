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