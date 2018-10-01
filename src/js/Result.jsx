import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart.jsx";
import Spinner from "./Spinner.jsx";
import axios from "axios";

class Result extends Component {
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
      return <Spinner />;
    } else {
      return (
        <div className="chart-wrapper">
          <Chart
            tweets={this.state.tweets}
            word={this.props.location.state.test_word}
          />
        </div>
      );
    }
  }
}

export default Result;
