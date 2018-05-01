import React, { Component } from 'react';
import './tags.css'

class Tags extends Component {
    render() { 
    	return (
    		<ul className="tagsList">
	    	{
	    		this.props.tags.map(tag => {
	    		return <li className="tag" key={tag}> {tag} </li>
	    		})
	    	}
	    	</ul>
    	)
    }
}

export default Tags;