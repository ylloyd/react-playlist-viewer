import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
var SM = require('soundmanager2')

import styles from "./index.css"

const Item = ({image=null, albumInfo=[]}) =>

(<div>
	<div>
		{
	      image &&
	      <img src={image} className={styles.image} />
	    }
	</div>
    <div>
      {
        albumInfo && !albumInfo.loading &&
        console.log(albumInfo),
        Object.keys(albumInfo.tracks.items).map((albumKey, index) => {
          return <li className={styles.song} key={index}>{albumInfo.tracks.items[albumKey].name}</li>
        })
      }
    </div>

</div>)

export default Item
