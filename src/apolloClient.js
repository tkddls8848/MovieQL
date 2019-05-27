import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    connectToDevTools : true
});

export default client;