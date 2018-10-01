import React, { Component } from "react";
import Search from "./Search.jsx";

const Landing = () => (
  <div className="landing">
    <div className="landing-header">
      <h2>Twitter Counter</h2>
    </div>
    <div className="landing-paragraph">
      <p>
        Twitter counter is a simple tool that allows you to parse recent 200
        tweets from an account and count apperance of given word. <br />Created
        for demonstration purposes only with React, React-Router, Recharts and
        Flask.
        <br />
        <a href="https://github.com/JacekDwojakPL/tweets" target="_blank">
          GitHub repository
        </a>
      </p>
    </div>
    <Search />
  </div>
);

export default Landing;
