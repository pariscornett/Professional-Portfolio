import React, { Component } from 'react'


const styles = {
    layout: {
        position: "relative",
        top:"250px"
    }
}

class About extends Component {
    render() {
        return (
            <div style={styles.layout} >
               <h1>About</h1> 
            </div>
        )
    }
}

export default About
