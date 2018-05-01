import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';
import './sidebar.css'

class Sidebar extends Component {

	constructor(props) {
		super(props)
	}

	filterItems() {
		return this.props.recepies.filter(this.props.filterMethod);
	}

    render() { 
    	console.log("we are rendering the Sidebar with " + this.props.recepies);
    	return (
	        <div className="sidebar">
	        	<div className="sidebar-element">
		        	<Link to="/add">
		        		<button className="add-button">הוספת מתכון</button>
		        	</Link>
	        	</div>
	        	<input id="serach" placeholder="search" onChange={this.props.filterChanged}/>
	        	{this.filterItems().map(recepy => {
	        		console.log("we are maping the props recepy = " + recepy);
	        		return <SidebarItem key={recepy.title} title={recepy.title} tags={recepy.tags} id={recepy.id} />
	        	})}
	        </div>
        )
    }
}

export default Sidebar;