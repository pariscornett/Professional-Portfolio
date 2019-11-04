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
    btn: {
        background: "#d46fbb",
        border:"none",
        padding: "1rem 2rem",
        color: "#ffffff",
        textAlign: "center",
        fontSize: "20px",
        textTransform: "uppercase",
        position: "relative",
        display: "inline", 
        top: "50px",
        left: "480px",
        margin:"15px",
        width: "15rem",
        cursor: "pointer"
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
                                        <h3 style={styles.banner}>Hi, my name's Paris...</h3>
                                        {/* <Projects /> */}
                                        <Spring
                                            from={{opacity:0}}
                                            to={{opacity:1}}
                                            config={{delay:2000, duration: 2000}}
                                        >
                                            {props => (
                                                <div style= {props}>
                                                    <h3 style={styles.banner}> ...I'm a web developer based in Nashville, TN</h3>
                                                    {/* <div style={styles.btn} onClick={this.props.toggleProjects}>Check out some of my work</div> */}
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
