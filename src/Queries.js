import gql from 'graphql-tag'

export const HOME_PAGE = gql`
{
    Movies(limit:50, rating:8.0){
      id
      title
      genres
    }
}
`