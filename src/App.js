import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Router>
      <Nav />
          <Switch>
            <Route
              exact path="/" component={Home}
            />
            <Route
              exact path="/home" component={Home}
            />
            <Route
              exact path="/contact" component={Contact}
            />
            <Route
              exact path="/projects" component={Projects}
            />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
