import React, { Component } from 'react';
import List from "List";
import consts from "./consts"

const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });


export default class App extends Component {

  state = {
    artists: null
  };

  fetchArtist(name){
    fetch(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
      response.json().then((data)=>{
            if(!data.error){
              this.setState({artists:data.artists.items})
            }
        })
    });
  }

  onInputArtistChange = (value) => {
      this.fetchArtist(value);
  };

  render() {
    return (
      <div>
        <List title="Artist"
              items={this.state.artists}
              autoFilter={false}
              onInputChange={this.onInputArtistChange} />
        <List title="Kind" items={kindsArray} />
      </div>
    )
  }
}
