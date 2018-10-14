import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({ seenIndexes: seenIndexes.data });
  };

  renderSeenIndexes = () => {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  };

  renderValues = () => {};

  render() {
    return (
      <div>
        <h1>Fib Calculator</h1>

        <form>
          <lavel>Enter index</lavel>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        <h3>Previously entered indexes:</h3>
        <p>{this.renderSeenIndexes()}</p>

        <h3>Calculated values:</h3>
        <p>{this.renderValues()}</p>
      </div>
    );
  }
}

export default Fib;
