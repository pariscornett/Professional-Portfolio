import React, { Component } from 'react'
//import Projects from "./Projects";
import { Spring } from "react-spring/renderprops";


const styles = {
    layout: {
        position: "relative",
        top:"-100px",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        height: "500px",
        width: "100%"
    },
    banner: {
        position:"relative",
        color: "#ffffff",
        width: "100%",
        textAlign: "center"
    },
    computer: {
        position: "relative",
        top: "50px",
        left: "40em"
    }
}

class About extends Component {
    render() {
        return (
            <Spring
                from={{opacity:0}}
                to={{opacity:1}}
            >
                {props => (
                    <div style={props}>
                        <div style={styles.layout} >
                            <Spring
                                from={{opacity: 0}}
                                to={{opacity:1}}
                                config={{delay: 1000, duration: 1000}}
                            >
                                { props => (
                                    <div style={props}>
                                        <h3 style={styles.banner}>Hi, I'm Paris.</h3>
                                        {/* <Projects /> */}
                                        <Spring
                                            from={{opacity:0}}
                                            to={{opacity:1}}
                                            config={{delay:2000, duration: 2000}}
                                        >
                                            {props => (
                                                <div style= {props}>
                                                    <h3 style={styles.banner}> I'm a web developer based in Nashville</h3>
                                                </div>
                                            )}
                                        </Spring>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>
                )}
            </Spring>
           
            
        )
    }
}

export default About
