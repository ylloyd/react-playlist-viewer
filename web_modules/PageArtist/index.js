import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import ItemDetails from "ItemDetails"

export default class PageArtist extends Component {

  state = {
    artistName: "Discover new Artists",
  };

  render() {

    return (
      <div>
        {
            this.state.artistName &&
            <ItemDetails name={this.state.artistName}
                         image={"https://camo.githubusercontent.com/90cc8402b761c2c1539fb811b1fa84088552e5b0/687474703a2f2f6973342e6d7a7374617469632e636f6d2f696d6167652f70662f75732f7233302f507572706c65372f76342f38372f38632f34342f38373863343435312d383335622d663031622d383834372d6166303461356238336634622f70725f736f757263652e706e67"}
                         kinds={["...","..."]}
                         songs={[{name:"..."},{name:"..."},{name:"..."}]}  />
        }
      </div>
    )
  }
}
