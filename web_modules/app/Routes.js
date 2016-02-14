import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from "./App"
import PageHome from "PageHome"
import PageSearch from "PageSearch"

export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="search" component={PageSearch}/>
            <IndexRoute component={PageHome} />
        </Route>
        <Route path="*" component={App}/>
      </Router>
    )
  }
}
