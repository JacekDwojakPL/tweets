import React, { Component } from "react";
import { Link } from "react-router-dom";
import Suggestions from "./Suggestions.jsx";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      screen_name: "",
      test_word: "",
      suggestions: [],
      showSuggestions: false
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
      this.setState({ suggestions: [], showSuggestions: false });
    } else {
      axios
        .get("/user", {
          params: {
            q: event.target.value
          }
        })
        .then(response => {
          this.setState({ suggestions: response.data, showSuggestions: true });
        });
    }
  };

  clickHandler = (return_user_name, return_screen_name) => {
    this.setState({
      user_name: return_user_name,
      screen_name: return_screen_name,
      suggestions: [],
      showSuggestions: false
    });
  };

  render() {
    const showSuggestions = this.state.showSuggestions;
    return (
      <div className="search-div">
        <div className="search-box">
          <div className="col">
            <span>Search</span>
            <input
              onInput={this.handleInputChange}
              type="text"
              placeholder="User name"
              name="user_name"
              value={this.state.user_name}
            />
          </div>
          <div className="col">
            <span>for</span>
            <input
              onInput={this.handleInputChange}
              type="text"
              placeholder="Word"
              name="test_word"
              value={this.state.test_word}
            />
          </div>
          <div className="link-wrapper">
            <Link
              to={{
                pathname: "/result",
                state: {
                  screen_name: this.state.screen_name,
                  test_word: this.state.test_word
                }
              }}
            >
              Go
            </Link>
          </div>
        </div>
        {showSuggestions ? (
          <div className="suggestions-div">
            <Suggestions
              suggestions={this.state.suggestions}
              clickHandler={this.clickHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
