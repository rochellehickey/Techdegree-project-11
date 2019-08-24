import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Container from './components/Container';
import fourZeroFour from './components/fourZeroFour';

class App extends Component {

  render() {
    return(
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/bears" />} />
            <Route exact path="/search/:query" component={Container} />
            <Route path="*" component={fourZeroFour} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
