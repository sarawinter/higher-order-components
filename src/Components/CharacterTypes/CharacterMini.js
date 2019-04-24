import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_minichar.css';


class MiniChar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMini: false
        }
    }

    hover = () => {
        this.setState({ showMini: !this.state.showMini });
    }

    render() {

        const char = this.props.character;

        return (
            <span className="mini-char">
                <Link to={`/characters/${char.id}`}><span onMouseOver={this.hover} onMouseOut={this.hover} className="char-text">{char.name}</span></Link>
                {this.state.showMini &&
                    <div className="mini-info">
                        <img className="mini-img" src={char.image} alt="" />
                        <h3>{char.name}</h3>
                    </div>
                }
            </span>
        );
    }
}

export default MiniChar;