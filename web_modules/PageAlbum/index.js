import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getAlbumInfo } from "app/reducers/albuminfo"

import AlbumDetails from "AlbumDetails"

@connect(
    (state) => ({
        albuminfo : state.albuminfo
    }),
    (dispatch) => ({
        getAlbumInfo : (value) => dispatch(getAlbumInfo(value)),
    })
)
export default class PageAlbum extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,
      getArtist : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      albuminfo : null,
      getAlbumInfo : () => {},
  };
  componentDidMount(){

      const {
        params,
        getAlbumInfo,
      } = this.props

      if(params.albumId) {
        getAlbumInfo(params.albumId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getAlbumInfo,
    } = this.props

    if(nextProps.params.albumId!=params.albumId){
      getAlbumInfo(nextProps.params.albumId)
    }
  }

  render() {
    const {
      params,
      albuminfo,
    } = this.props
    return (
      <div>
        {
            albuminfo && !albuminfo.loading &&
            <AlbumDetails image={albuminfo.images ? albuminfo.images[0].url : null}
                          albumInfo={albuminfo}
                          info={albuminfo} />
        }
      </div>
    )
  }
}
