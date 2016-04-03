import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
//var SM = require('soundmanager2')

import styles from "./index.css";

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const millisToMinutesAndSeconds = (duration) => {
  var minutes = Math.floor(duration / 60000);
  var seconds = ((duration % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const createAudio = (song_id, src_song) => {
  setTimeout( () => {
    if (document.getElementById(song_id).innerHTML != null){
      var single_song = document.getElementById(song_id);
      single_song.innerHTML = "<audio src="+src_song+" id=song_"+song_id+"></audio>"+
      "<div>"+
        "<button onClick={document.getElementById('song_"+song_id+"').play()}>Play</button>"+
        "<button onClick={document.getElementById('song_"+song_id+"').pause()}>Pause</button>"+
      "</div>";
    };
  }, 500);
}

// const toggleButton = (id) => {
//   var audioElem = document.getElementById(id);
//   if (audioElem.paused)
//     audioElem.play();
//   else
//     audioElem.pause();
// }

const Item = ({image=null, albumInfo=[], info=null}) =>

(<div className={styles.wrapperPage}>
	<div className={styles.imageWrapper}>
		{
      image &&
      <img src={image} className={styles.imageCover} />
    }
	</div>

  <div className={styles.infoWrapper}>
    {
      info &&
      <div>
        <span className={styles.albumTitle}>{albumInfo.name}</span><br/>
        <span><em>{albumInfo.release_date}</em></span>
      </div>
    }
  </div>

  <Table style={{'maxWidth':'900px', margin : '0 auto'}} >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn style={{width : '15px'}}>Track</TableHeaderColumn>
        <TableHeaderColumn style={{'maxWidth' : '100px'}}>Title</TableHeaderColumn>
        <TableHeaderColumn style={{width : '50px', 'textAlign':'center'}}>Duration</TableHeaderColumn>
        <TableHeaderColumn>Sample</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {
      albumInfo && !albumInfo.loading &&
      console.log(albumInfo.tracks.items),
      Object.keys(albumInfo.tracks.items).map((albumKey, index) => {
        //return <li className={styles.song} key={index}>{albumInfo.tracks.items[albumKey].name}</li>
        // soundManager.createSound({
        //   id: `song_no_${albumInfo.tracks.items[albumKey].id}`,
        //   type:'audio/mp3',
        //   url: albumInfo.tracks.items[albumKey].preview_url,
        //   volume: '20'
        // })
        return <TableRow key={index} onLoad={createAudio(albumInfo.tracks.items[albumKey].id, albumInfo.tracks.items[albumKey].preview_url)}>
          <TableRowColumn style={{width : '15px', 'textAlign':'center'}}>{albumInfo.tracks.items[albumKey].track_number}</TableRowColumn>
          <TableRowColumn style={{'maxWidth' : '100px'}}>{albumInfo.tracks.items[albumKey].name}</TableRowColumn>
          <TableRowColumn style={{width : '50px', 'textAlign':'center'}}>{millisToMinutesAndSeconds(albumInfo.tracks.items[albumKey].duration_ms)}</TableRowColumn>
          <TableRowColumn><span id={albumInfo.tracks.items[albumKey].id}></span></TableRowColumn>
        </TableRow>
      })
    }
    </TableBody>
  </Table>

</div>)

export default Item
