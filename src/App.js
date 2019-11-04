import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";
import Nav from "./components/Nav";
import Home from "./components/Home";
//import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
//import ProjectCard from "./components/ProjectCard";
//import Skills from "./components/Skills";
import "./App.css";



class App extends Component{
  state={
    showComponentProjects: false 
  }

  toggleProjects = e => this.setState({ showComponentProjects: !this.state.showComponentProjects })


  render() {
    return (
      <div className="app">
        <Router>
        <Nav />
        <Home />
        <About />
        <Projects />
        </Router>
      </div>
    )
  }
 
}

export default App;
