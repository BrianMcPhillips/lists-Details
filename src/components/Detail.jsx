import React, { Component } from 'react';
import { getCharacter } from '../services/heyArnold';

export default class Detail extends Component {
  state = {
    detail: {}
  }

  componentDidMount = () => {
    getCharacter(this.props.match.params.id)
      .then(detail => this.setState({ detail }));
  }

  render() {
    const { detail } = this.state;
    return (
      <div>
        <h1>{detail.name}</h1>
        <img src={detail.image} alt={detail.name}/>
      </div>
    );
  }
}
