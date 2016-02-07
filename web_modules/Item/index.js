import React, { Component } from 'react';

import styles from "./index.css"

const Item = ({name ="" }) =>

(<div className={styles.item}>
  {name}
</div>)

export default Item
