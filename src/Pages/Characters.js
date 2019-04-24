import React, { Component } from 'react';
import { getCharacters, typeConstants } from '../Data/data';
import './_page.css';

import Menu from '../Components/Global/Menu';
import Hero from '../Components/CharacterTypes/Hero';
import Sidekick from '../Components/CharacterTypes/Sidekick';
import Villain from '../Components/CharacterTypes/Villain';

class Characters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            charactersData: this.getCharactersData(),
            currentCharacter: {},
            currentId: this.getCharacterId()
        }
    }

    componentDidMount() {
        const id = this.state.currentId;
        this.setCharacter(id);
    }

    componentDidUpdate() {
        const id = this.getCharacterId();

        if (id !== this.state.currentId) {
            this.setCharacter(id);
        }
    }

    setCharacter = (id) => {
        const character = this.getCharacterById(id);
        this.setState({
            currentId: id,
            currentCharacter: character
        });
    }

    getCharactersData = () => {
        return getCharacters();
    }

    getCharacterId = () => {
        return this.props.match.params && this.props.match.params.id;
    }

    getCharacterById = (id) => {
        return this.state.charactersData.find(char => char.id === parseInt(id));
    }

    render() {

        const charType = this.state.currentCharacter && this.state.currentCharacter.type;
        const { currentCharacter, charactersData } = this.state;
        let char = null;

        switch (charType) {
            case typeConstants.HERO:
                char = <Hero {...this.props} id={currentCharacter.id} character={currentCharacter} characterList={charactersData} />
                break;
            case typeConstants.VILLAIN:
                char = <Villain {...this.props} id={currentCharacter.id} character={currentCharacter} characterList={charactersData} />
                break;
            case typeConstants.SIDEKICK:
                char = <Sidekick {...this.props} id={currentCharacter.id} character={currentCharacter} characterList={charactersData} />
                break;
            default:
                char = null;
        }

        return (
            <div className="page">
                <div className="left-col"><Menu characters={charactersData} /></div>
                <div className="right-col">
                    {this.state.currentId ? char : 'Hello characters...'}
                </div>
            </div>
        );
    }
}

export default Characters;
