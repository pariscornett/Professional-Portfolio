import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";
import Nav from "./components/Nav";
import Home from "./components/Home";
//import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
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
        <About toggleProjects={this.toggleProjects}/>
        <Transition
          renderprops-web
          items={this.state.showComponentProjects}
          from={{opacity: 0}}
          enter={{opacity:1}}
          leave={{opacity:0}}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <Projects />
            </animated.div>
          ))}
        </Transition>
        <ProjectCard />
        </Router>
      </div>
    )
  }
 
}

export default App;
