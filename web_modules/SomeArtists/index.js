// import React, { Component, PropTypes } from 'react';
// import {connect} from "react-redux"
// import fetchJSON from "app/fetchJSON";
// import consts from "app/consts"

// import { get as getSomeArtists } from "app/reducers/someartists"

// import VariousArtists from "VariousArtists"

// @connect(
//     (state) => ({
//         someartists : state.someartists
//     }),
//     (dispatch) => ({
//         getSomeArtists : () => dispatch(getSomeArtists())
//     })
// )
// export default class SomeArtists extends Component {

//   static propTypes = {
//       params: PropTypes.shape({
//         artistId:PropTypes.string,
//       }),
//       someartists : PropTypes.object,
//       getArtist : PropTypes.func,
//   };

//   static defaultProps = {
//       params: {},
//       someartists : null,
//       album : null,
//       getSomeArtists : () => {},
//       getArtistAlbums : () => {}
//   };
//   componentDidMount(){

//       const {
//         params,
//         someartists,
//         getArtistAlbums,
//       } = this.props

//       if(params.artistId) {
//         getSomeArtists()
//         getArtistAlbums(params.artistId)
//       }
//   }

//   componentWillReceiveProps(nextProps){
//     const {
//       params,
//       getSomeArtists,
//       getArtistAlbums,
//     } = this.props

//     if(nextProps.params.artistId!=params.artistId){
//       getSomeArtists(),
//       getArtistAlbums(nextProps.params.artistId)
//     }
//   }

//   render() {
//     const {
//       params,
//       someartists,
//     } = this.props
//     return (
//       <div>
//         {
//             someartists && !someartists.loading
//             //<VariousArtists />
//         }
//       </div>
//     )
//   }
// }
