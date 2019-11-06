import React, { Component } from 'react'
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
        textAlign: "center",
        fontFamily: 'Raleway sans-serif',
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
                                        <h2 style={styles.banner}>Hi, my name's Paris...</h2>
                                        {/* <Projects /> */}
                                        <Spring
                                            from={{opacity:0}}
                                            to={{opacity:1}}
                                            config={{delay:2000, duration: 2000}}
                                        >
                                            {props => (
                                                <div style= {props}>
                                                    <h2 style={styles.banner}> ...I'm a web developer based in Nashville, TN</h2>
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
