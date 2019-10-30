import React, { Component } from 'react'



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
        
                    <div style={styles.layout} >
                        <h3 style={styles.banner}>I'm Paris, a problem-solver and programmer.</h3>
                    </div>
         
        )
    }
}

export default About
