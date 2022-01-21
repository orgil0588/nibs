import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import App from "./Pages/App";
import About from "./Pages/About";
import Service from "./Pages/Service";
import News from "./Pages/News";
import InsuranceCompare from "./Pages/InsuranceCompare";
import OnlineInsurance from "./Pages/OnlineInsurance";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/news" component={News} />
        <Route exact path="/InsuranceCompare" component={InsuranceCompare} />
        <Route exact path="/onlineInsurance" component={OnlineInsurance} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
