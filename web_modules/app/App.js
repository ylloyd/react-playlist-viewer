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
        <ItemDetails name="Bob Marley"
                     image={"https://i.scdn.co/image/22e6ec2e00e3fe5ce9e0aadb3ed2616d900bb385"}
                     kinds={["a","b","c"]}
                     songs={[{name:"toto"},{name:"tata"},{name:"titi"},{name:"tutu"}]}  />
      </div>
    )
  }
}
