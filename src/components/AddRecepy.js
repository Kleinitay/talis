import React, { Component } from 'react';

class AddRecepy extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let data = new FormData(event.target);
		console.log(data.get("tags"));
		this.props.addRecepy(data);
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<div>
					<label>כותרת:</label>
					<input type="text" id="title" name="title"/>
				</div>
				<div>
					<label>הוראות:</label>
					<input type="textarea" id="howto" name="howto"/>
				</div>
				<div>
					<label>הערות:</label>
					<input type="textarea" id="notes" name="notes"/>
				</div>
				<div>
					<label>ציון:</label>
					<input type="number" name="grade" min="1" max="5" />
				</div>
				<div>
					<label>תגיות:</label>
					<input type="text" name="tags" />
				</div>
				<div>
					<button>שלח</button>
				</div>
			</form>		
		)
	}
}

export default AddRecepy;