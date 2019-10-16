import React, { Component } from 'react'

const styles = {
    layout: {
        position: "relative",
        top:"250px"
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home
