import React from 'react'
import { Query } from 'react-apollo'
import { HOME_PAGE } from './Queries'

const Home = () => (<Query query={HOME_PAGE}>
    {({loading, data, error}) => {
            if (loading) {
                return <span>loading wait</span>
            } else if (error) {
                console.log(error)
                return <span>error</span>            
            } else if (data) {
                console.log(data)
                return data.movies.map(movie => <h2 key={movie.id}>{movie.title} || RATING = {movie.rating}</h2>)
            } 
        }
    }
</Query>
)


export default Home