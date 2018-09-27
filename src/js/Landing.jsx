import React, { Component } from "react";
import { Link } from "react-router-dom";
import Suggestions from "./Suggestions.jsx";
import axios from "axios";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      screen_name: "",
      test_word: "",
      suggestions: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchForUser = this.searchForUser.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleInputChange = event => {
    if (event.target.name === "user_name") {
      this.setState({ user_name: event.target.value });
      this.searchForUser(event);
    } else if (event.target.name === "test_word") {
      this.setState({ test_word: event.target.value });
    }
  };

  searchForUser = event => {
    if (event.target.value === "") {
      this.setState({ suggestions: [] });
    } else {
      axios
        .get("/user", {
          params: {
            q: event.target.value
          }
        })
        .then(response => {
          this.setState({ suggestions: response.data });
        });
    }
  };

  clickHandler = (return_user_name, return_screen_name) => {
    this.setState({
      user_name: return_user_name,
      screen_name: return_screen_name,
      suggestions: []
    });
  };

  render() {
    if (this.state.suggestions.length === 0) {
      return (
        <div className="main">
          <span>Twitter name: </span>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="User name"
            name="user_name"
            value={this.state.user_name}
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
    } else {
      return (
        <div className="main">
          <span>Twitter name: </span>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="User name"
            name="user_name"
            value={this.state.user_name}
          />
          <div className="suggestions-div">
            <Suggestions
              suggestions={this.state.suggestions}
              clickHandler={this.clickHandler}
            />
          </div>
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
}

export default Landing;
