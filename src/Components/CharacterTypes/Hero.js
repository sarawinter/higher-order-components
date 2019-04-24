import React, { Component } from 'react';
import './_hero.css';

import withCharacterMods from './CharacterHOC';


class Hero extends Component {

    render() {

        const char = this.props.character;
        const biography = this.props.biography;

        return (
            <div className="character hero">
                <h2>{char.name} - Hero</h2>
                <img src={char.image} alt="" />
                <div>{biography}</div>
            </div>
        );
    }
}

export default withCharacterMods(Hero);
