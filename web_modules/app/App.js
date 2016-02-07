import React, { Component } from 'react';
import fetchJSON from "./fetchJSON";
import List from "List";
import consts from "./consts"

import ItemDetails from "ItemDetails"

export default class App extends Component {

  state = {
    artists: null,
    kinds: null,
  };

  fetchArtist(name){
    fetchJSON(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
        if(!response.error){
          this.setState({artists:response.artists.items})
        }
    });
  };

  fetchKinds(){
    fetchJSON(consts.api.enpoints.getKinds()).then((response) => {
        if(!response.error){
          this.setState({kinds:response.genres})
        }
    });
  };


  onInputArtistChange = (value) => {
      this.fetchArtist(value);
  };

  componentDidMount() {
      this.fetchKinds();
  };

  render() {
    return (
      <div>
        <List title="Artist"
              items={this.state.artists}
              autoFilter={true}
              onInputChange={this.onInputArtistChange} />
        <List title="Kind"
              items={this.state.kinds}
              limit={10} />
        <ItemDetails name="Odezenne"
                     image={"https://i.scdn.co/image/ae22a4f41ab82ac18dcf0d83bd86703c3b83ee76"}
                     kinds={["Rap","Hip-Hop","Underground"]}
                     songs={[{name:"Bouche à lèvres"},{name:"Saxophone"},{name:"Vilaine"},{name:"Souffle le vent"},{name:"Vodka"}]}  />
      </div>
    )
  }
}
