import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResultChart from "./ResultChart.jsx";
import axios from "axios";

class Tweets extends Component {
  state = {
    screen_name: "",
    count: "",
    tweets: [],
    status: "fetch"
  };

  componentDidMount() {
    axios.post("/search", this.props.location.state).then(response => {
      if (response.data === null) {
        this.setState({ status: "empty" });
      } else {
        this.setState({ tweets: response.data, status: "ready" });
      }
    });
  }

  render() {
    if (this.state.status === "empty") {
      return (
        <div>
          `Account "${this.props.location.state.screen_name}" doesn't exist! `
          <Link to="/">Try again</Link>
        </div>
      );
    } else if (this.state.status === "fetch") {
      return <div>Please wait...</div>;
    } else {
      return (
        <div>
          <ResultChart tweets={this.state.tweets} />
          <Link to="/">Try again</Link>
        </div>
      );
    }
  }
}

export default Tweets;
