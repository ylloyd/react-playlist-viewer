import React, { Component } from 'react';
import ArtistItem from "ArtistItem";

const artists = [
  {name:"Bob Marley"},
  {name:"Bob Dylan"},
  {name:"Odezenne"},
  {name:"Kavinsky"}
]

const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

export default class App extends Component {
  render() {
    return (
      <div>
      {
        artists &&
        artists.map((artist, index) => {
          return (
              <ArtistItem key={index} name={artist.name} />
          );
        })
      }
      {
        kinds &&
        Object.keys(kinds).map((key, index) => {
          return (
              <ArtistItem key={index} name={kinds[key].name} />
          );
        })
      }
      </div>)
  }
}
