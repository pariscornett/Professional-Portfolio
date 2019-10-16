import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
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
              exact path="/about" component={About}
            />
            <Route
              exact path="/contact" component={Contact}
            />
            <Route
              exact path="/projects" component={Projects}
            />
            <Route
              exact path="/resume" component={Resume}
            />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
