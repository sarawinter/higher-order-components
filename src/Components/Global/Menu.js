import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_menu.css';

class Menu extends Component {

    render() {

        const characters = this.props.characters;

        const charactersMenu = characters.map(char => <NavLink key={char.id} to={`/characters/${char.id}`}>{char.name}</NavLink>)

        return (
            <div className="menu">
                {charactersMenu}
            </div>
        );
    }
}

export default Menu;
