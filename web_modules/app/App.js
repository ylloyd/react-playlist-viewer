import React, { Component } from 'react';
import fetchJSON from "./fetchJSON";
import List from "List";
import consts from "./consts"

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
      </div>
    )
  }
}
