import React, { Component } from "react";
import { Link } from "react-router-dom";

class OtherPage extends Component {
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

export default OtherPage;
