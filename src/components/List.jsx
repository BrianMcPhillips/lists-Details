import React, { Component } from 'react';
import { getArnold } from '../services/heyArnold';

export default class Characters extends Component {
  state = {
    characters: []
  }

  componentDidMount = () => {
    getArnold()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    const characterStuff = characters.map(character => (
      <li key= {character._id}>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name}/>
      </li>
    ));
    return (
      <div>
        <h1>Hey Arnold Characters</h1>
        <ul>
          { characterStuff }
        </ul>
      </div>
    );
  }
}
