import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getArtistAlbums } from "app/reducers/album"

import ItemDetails from "ItemDetails"

@connect(
    (state) => ({
        artist : state.artist,
        album : state.album
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
        getArtistAlbums : (value) => dispatch(getArtistAlbums(value)),
    })
)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,
      getArtist : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      album : null,
      getArtist : () => {},
      getArtistAlbums : () => {}
  };
  componentDidMount(){

      const {
        params,
        getArtist,
        getArtistAlbums,
      } = this.props

      if(params.artistId) {
        getArtist(params.artistId)
        getArtistAlbums(params.artistId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getArtistAlbums,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId),
      getArtistAlbums(nextProps.params.artistId)
    }
  }

  render() {
    const {
      params,
      artist,
      album,
    } = this.props
    return (
      <div>
        {
            artist && !artist.loading && album && !album.loading &&
            <ItemDetails name={artist.name}
                         image={artist.picture ? artist.picture.url : null}
                         kinds={artist.genres}
                         albums={album} />
        }
      </div>
    )
  }
}
