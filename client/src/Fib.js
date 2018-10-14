import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };

  renderSeenIndexes = () => {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  };

  renderValues = () => {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  };

  render() {
    return (
      <div>
        <h1>Fib Calculator</h1>

        <form onSubmit={this.handleSubmit}>
          <lavel>Enter index</lavel>
          <input
            type="text"
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
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
