import React, { Component } from 'react'


const styles = {
    layout: {
        position: "relative",
        top:"250px"
    }
}

class Resume extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <h1>Resume</h1>
            </div>
        )
    }
}

export default Resume
