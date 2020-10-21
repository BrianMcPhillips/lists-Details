import React, { Component } from 'react';
import { getArnold } from '../services/heyArnold';

export default class Detail extends Component {
  state = {
    details: {}
  }

  componentDidMount = () => {
    getArnold(this.props.match.params._id)
      .then(details => this.setState({ details }));
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <h1>{details.name}</h1>
        <img src={details.image} alt={details.name}/>
      </div>
    );
  }
}
