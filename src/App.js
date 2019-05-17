import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo'
import {HashRouter as Router, Route} from 'react-router-dom'
import client from './apolloClient'
import Home from './home'
import Detail from './detail'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <Router>
            <main>
              <Route exact={true} path={"/"} component={Home}></Route>
              <Route path={"/detail/:movieId"} component={Detail}></Route>
            </main>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
