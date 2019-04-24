import React, { Component } from 'react';
import './_villain.css';

import withCharacterMods from './CharacterHOC';


class Villain extends Component {

    render() {

        const char = this.props.character;
        const biography = this.props.biography;

        return (
            <div className="character villain">
                <h2>{char.name} - Villain</h2>
                <img src={char.image} alt="" />
                <div>{biography}</div>
            </div>
        );
    }
}

export default withCharacterMods(Villain);
