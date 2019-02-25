import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'

export default class MainScreen extends Component {
  render() {
    return (
      <Router>
        <div id="main--screen">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
