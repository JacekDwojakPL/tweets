import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_name: "",
      test_word: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    if (event.target.name === "screen_name") {
      this.setState({ screen_name: event.target.value });
    } else if (event.target.name === "test_word") {
      this.setState({ test_word: event.target.value });
    }
  };

  render() {
    return (
      <div className="main">
        <span>Twitter name: </span>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Screen name"
          name="screen_name"
          value={this.state.screen_name}
        />
        <span>Which word are you looking for? </span>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Word"
          name="test_word"
          value={this.state.test_word}
        />
        <Link
          to={{
            pathname: "/tweets",
            state: {
              screen_name: this.state.screen_name,
              test_word: this.state.test_word
            }
          }}
        >
          <button>Send</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
