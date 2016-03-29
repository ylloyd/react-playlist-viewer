import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from "./index.css"

const Item = ({name ="", image=null, kinds=[], songs=[], albums=[]}) =>

(<div className={styles.itemDetails}>
    {
      image &&
      <img src={image} className={styles.image} />
    }
    <h2 className={styles.title}>{name}</h2>
    <div className={styles.kinds}>
      {
        kinds &&
        kinds.map((item, index) => {
          const isLastItem = index<kinds.length-1;
          return <span key={index}>{item}{isLastItem && ", "}</span>
        })
      }
    </div>
    <ul className={styles.list}>
      {
        songs &&
        songs.map((song, index) => {
          return <li className={styles.song} key={index}>{song.name}</li>
        })
      }
    </ul>
    <ul className={styles.kinds}>
      {
        //const obj = Object.keys(albums)//[1, 2, 3]
        albums &&
        Object.keys(albums).map((albumKey, index) => {

          // albums[albumKey].images.map((imgKey, index) => {
          //    console.log(imgKey.url)
          // })


          return <li key={index} >
            <div>{albums[albumKey].name}</div>
            <Link to={`/album/${albums[albumKey].id}`}>Links</Link>
            <img src={albums[albumKey].images[0].url} className={styles.image} />
          </li>
        })
      }
    </ul>
</div>)

export default Item
