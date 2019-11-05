import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
//import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";




class App extends Component{
  state={
    showComponentProjects: false 
  }

  toggleProjects = e => this.setState({ showComponentProjects: !this.state.showComponentProjects })


  render() {
    return (
      <div className="app">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    )
  }
 
}

export default App;
