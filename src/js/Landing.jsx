import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_name: "",
      count: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    if (event.target.name === "screen_name") {
      this.setState({ screen_name: event.target.value });
    } else if (event.target.name === "count") {
      this.setState({ count: event.target.value });
    }
  };

  render() {
    return (
      <div className="main">
        <form action="/search" method="POST">
          <span>Enter twitter name: </span>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Screen name"
            name="screen_name"
            value={this.state.screen_name}
          />
          <span>How many tweets you want to strip? </span>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Count"
            name="count"
            value={this.state.count}
          />
          <button type="submit">Send</button>
        </form>
        <Link to="/chart">See the example chart</Link>
      </div>
    );
  }
}

export default Landing;
