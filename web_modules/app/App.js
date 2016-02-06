import React, { Component } from 'react';
import List from "List";
import consts from "./consts"

export default class App extends Component {

  state = {
    artists: null,
    kinds: null,
  };

  fetchArtist(name){
    fetch(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
      response.json().then((data)=>{
            if(!data.error){
              this.setState({artists:data.artists.items})
            }
        })
    });
  };

  fetchKinds(){
    fetch(consts.api.enpoints.getKinds()).then((response) => {
      response.json().then((data)=>{
            if(!data.error){
              this.setState({kinds:data.genres})
            }
        })
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
