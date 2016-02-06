import React, { Component } from 'react';

const Item = ({name ="", image=null, kinds=[], songs=[]}) =>

(<div className="itemDetails">
    {
      image &&
      <img src={image} className="itemDetailsImg" />
    }
    <h2 className="itemDetailsTitle">{name}</h2>
    <div className="itemDetailsKinds">
    {
      kinds &&
      kinds.map((item, index) => {
        const isLastItem = index<kinds.length-1;
        return <span key={index}>{item}{isLastItem && ", "}</span>
      })
    }
    </div>
    <ul>
      {
        songs &&
        songs.map((song, index) => {
          return <li className="itemDetailsSong" key={index}>{song.name}</li>
        })
      }
    </ul>

</div>)

export default Item
