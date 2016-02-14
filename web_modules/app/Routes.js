import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from "./App"
import PageHome from "PageHome"
import PageArtist from "PageArtist"
import PageDiscover from "PageDiscover"
import PageNotFound from "PageNotFound"

export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="artist/:artistId(/:artistName)" component={PageArtist}/>
            <Route path="discover" component={PageDiscover}/>
            <IndexRoute component={PageHome} />
        </Route>
        <Route path="*" component={PageNotFound}/>
      </Router>
    )
  }
}
