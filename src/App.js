//* Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* Components
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Words from "./components/pages/Words";
import Contact from "./components/pages/Contact";

import NavDrawer from "./components/layout/NavDrawer";

//* CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <NavDrawer />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/words" component={Words} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
