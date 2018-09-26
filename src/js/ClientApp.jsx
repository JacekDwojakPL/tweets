import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import Tweets from "./Tweets.jsx";

const App = () => (
  <BrowserRouter>
    <div className="application">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/tweets" component={Tweets} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
