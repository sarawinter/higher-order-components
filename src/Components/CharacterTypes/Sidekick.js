import React, { Component } from 'react';
import './_sidekick.css';

import withCharacterMods from './CharacterHOC';


class Sidekick extends Component {

    componentDidMount() {
        console.log('hello again!')
    }

    render() {

        this.props.myFunction();
        const char = this.props.character;
        const biography = this.props.biography;

        return (
            <div className="character sidekick">
                <h2>{char.name} - Sidekick</h2>
                <img src={char.image} alt="" />
                <div>{biography}</div>
            </div>
        );
    }
}

export default withCharacterMods(Sidekick);
