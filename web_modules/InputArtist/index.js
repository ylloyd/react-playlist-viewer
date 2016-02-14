import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

import styles from "./index.css";

export default class InputArtist extends Component {

  static contextTypes = {
      router: PropTypes.object,
  };

  state = {
    artists: null,
  };

  fetchArtist(name){
    fetchJSON(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
        if(!response.error){
          this.setState({artists:response.artists.items})
        }
    });
  };

  onInputArtistChange = (value) => {
      this.fetchArtist(value);
  };

  selectArtist = (item) => {
      this.context.router.push(`/artist/${item.id}/${item.name}`)
  };

  render() {
    return (
      <div className={styles.input}>
        <InputList title="Search Artists"
              onItemClick={this.selectArtist}
              items={this.state.artists}
              autoFilter={true}
              onInputChange={this.onInputArtistChange} />
      </div>
    )
  }
}
