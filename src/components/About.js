import React, { Component } from 'react'


const styles = {
    layout: {
        position: "relative",
        top:"100px",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        height: "500px",
        width: "100%"
    }
}

class About extends Component {
    render() {
        return (
            <div style={styles.layout} >
                <h1>ABOUT</h1>
            </div>
        )
    }
}

export default About
