import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DummyPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Another Page</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default DummyPage;
