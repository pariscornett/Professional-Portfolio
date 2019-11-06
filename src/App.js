import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Foot from "./components/Foot";


const container = {
  background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
  marginBottom: 0
}


class App extends Component{
  state={
    showComponentProjects: false 
  }

  toggleProjects = e => this.setState({ showComponentProjects: !this.state.showComponentProjects })


  render() {
    return (
      <div style={container}>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Foot />
      </div>
    )
  }
 
}

export default App;
