import React, {PropTypes, Component } from 'react';
import {Link, IndexLink} from 'react-router'

import InputArtist from 'InputArtist'
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';


import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import styles from './index.css'

export default class PlayerAudio extends Component {

  toggleButton = (id) => {
  var audioElem = document.getElementById(id);
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
};

    state = {
        id: false
    };

    playMusic = () =>{
      console.log('Play');
      this.parentNode.play();
    };

    randomID = () => {
      var random = Math.random();
      console.log('Random', random);
      return random;
    };

    render() {

      return (
        <div>
        <div key="key">
            <audio src="https://api.spotify.com/v1/tracks/2Gxna051PLTjjQVWTOP67D"></audio>
            <div>
            <button onClick={this.playMusic.bind(this)}>Play</button>
            </div>
            </div>
        </div>)

    }
}
