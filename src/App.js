import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo'
import {HashRouter as Router, Route} from 'react-router-dom'
import client from './apolloClient'
import Home from './Home'
import Detail from './Detail'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <Router>
            <React.Fragment>
              <Route exact={true} path={"/"} Component={Home}></Route>
              <Route path={"/detail/:movieId"} Component={Detail}></Route>
            </React.Fragment>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
