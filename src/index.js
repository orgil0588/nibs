import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./Pages/App";
import About from "./Pages/About";
import InsuranceCompare from "./Pages/InsuranceCompare";
import OnlineInsurance from "./Pages/OnlineInsurance";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/InsuranceCompare" component={InsuranceCompare} />
        <Route exact path="/onlineInsurance" component={OnlineInsurance} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
