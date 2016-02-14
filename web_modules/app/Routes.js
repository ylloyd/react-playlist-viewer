import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from "./App"
import PageHome from "PageHome"
import PageArtist from "PageArtist"
import PageDiscover from "PageDiscover"

export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="artist" component={PageArtist}/>
            <Route path="discover" component={PageDiscover}/>
            <IndexRoute component={PageHome} />
        </Route>
        <Route path="*" component={App}/>
      </Router>
    )
  }
}
