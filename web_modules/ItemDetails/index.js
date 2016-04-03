import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from "./index.css"
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

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
    <div className={styles.wrapperItem}>
      {
        //const obj = Object.keys(albums)//[1, 2, 3]
        albums &&
        Object.keys(albums).map((albumKey, index) => {

          // albums[albumKey].images.map((imgKey, index) => {
          //    console.log(imgKey.url)
          // })


          return <div className={styles.albumItem} key={index} >
            <Link to={`/album/${albums[albumKey].id}`}>
              <Card>
                <CardMedia overlay={<CardTitle title={albums[albumKey].name} subtitle={"By " + name} />}>
                  <img src={albums[albumKey].images[0].url} />
                </CardMedia>
              </Card>
            </Link>
          </div>
        })
      }
    </div>
</div>)

export default Item
