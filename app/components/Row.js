import React from 'react';
import { test } from '../../server/services.js';

class Row extends React.Component {
  constructor() {
    super();
    this.state = { result: '' };
  }

  async componentDidMount() {
    const [result] = await test();
    this.setState({ result });
  }

  render() {
    return <h1>{this.state.result.aka_name}</h1>;
  }
}

export default Row;
