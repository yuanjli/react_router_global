import React, { Component } from 'react';

class Food extends Component {
		componentDidMount() {
		document.title = 'Food';
	}
	render() {
		return (
			<div>
				<h1> Food PAGE </h1>
				<h2> My food is everything to me </h2>

				<p>   Food One    </p>
				<p>  Food Two 	 </p>
			</div>
		);
	}
}

export default Food;
