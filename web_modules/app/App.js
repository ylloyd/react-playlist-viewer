import React, { Component } from 'react';
import ArtistItem from "ArtistItem"

export default class App extends Component {
  render() {
    return (
      <div>
        <ArtistItem name="Bob Marley" />
        <ArtistItem name="Bob Dylan" />
        <ArtistItem name="Odezenne" />
        <ArtistItem name="Kavinsky" />
      </div>
    );
  }
}
