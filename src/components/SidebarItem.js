import React, { Component } from 'react';
import Tags from './tags';
import { Link } from 'react-router-dom';
import './sidebarItem.css';

class SidebarItem extends Component {
    render() { 
        return (
            <div className="sidebarItem">
                <Link to={"/recepies/" + this.props.id}>
                <div className="sidebarTitle"> { this.props.title } </div>
                </Link>
                <div>
                    <Tags tags={this.props.tags} />
                </div>
                <br />
            </div>
        )
    }
}

export default SidebarItem;