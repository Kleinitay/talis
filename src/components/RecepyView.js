import React, { Component } from 'react';
import './RecepyView.css'

class RecepyView extends Component {
	
	render() {
		console.log("recepy props are " + JSON.stringify(this.props));
		return (
			<div className="recepy-view">
				<h2> {this.props.recepy.title} </h2>
				<p>Grade {this.props.recepy.grade}</p>
				<p>{this.props.recepy.howto}</p>
				<p>{this.props.recepy.notes}</p>
			</div>
			)
	}
}

export default RecepyView;