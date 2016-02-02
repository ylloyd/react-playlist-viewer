import React, { Component } from 'react';

import Item from "Item"
import List from "List"

 const artists = [
	{name:"Rihanna"},
	{name:"Ne-Yo"},
	{name:"Beyoncé"},
	{name:"Chris Brown"}
]

const kinds = {
	rap: {name : "Rap"},
	rock: {name : "Rock"},
	electro: {name : "Electro"}
}

//let kindArray = Object.keys(kinds)
//console.log(kindArray)


// {
// 	//(artists != null &&)
// 	artists &&
// 	artists.map((artist, index) => {
// 		// return (<Item name={artist.name} />)
// 		return this.getItem(artist, index)
// 	})
// }

let kindArray = Object.keys(kinds)
console.log(kindArray.length)

export default class App extends Component {
	getItem(artist, index){
		return (<Item key={index} name={artist.name} />)
	}

	getKinds(kind, index){
		return (<Item key={index} name={kinds[key].name} />)
	}

	render() {
		return (
			<div>
		        <div>Hello React !</div>
		        <List items={artists} />
		        {
		        	kinds &&
		        	kindArray.map((key, index) => {
		        		console.log(kinds[key].name)
		        		return this.getItem(kinds[key], index)
		        	})
		        }
			</div>
		);
	}
}
