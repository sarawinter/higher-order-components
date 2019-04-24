import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_header.css';

class Header extends Component {

    render() {

        return (
            <div className="page-header">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink>
            </div>
        );
    }
}

export default Header;
