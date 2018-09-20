import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./Landing.jsx";
import ResultChart from "./ResultChart.jsx";

const App = () => (
  <BrowserRouter>
    <div className="application">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/chart" component={ResultChart} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
