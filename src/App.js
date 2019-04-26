import React from 'react';
import {ApolloProvider} from 'react-apollo'
import client from './apolloClient'

class App extends React {
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="App"></div>
      </ApolloProvider>
    );
  }
}

export default App;
