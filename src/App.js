import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
//import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";



function App() {
  return (
    <div className="app">
      <Router>
      <Nav />
      <Home />
      <About />
          {/* <Switch>
            <Route
              exact path="/" component={Home}
            />
            <Route
              exact path="/home" component={Home}
            />
            <Route
              exact path="/contact" component={Contact}
            />
          </Switch> */}
      </Router>
    </div>
  );
}

export default App;
