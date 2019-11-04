import React, { Component } from 'react'

const styles = {
    card: {
        position: "relative",
        top: -400,
        left: 100,
        height: 300,
        width: 500,
        background: "none",
        opacity: 0.8,
        cursor: "pointer",
        border: "1px solid #d46fbb",
        textAlign: "center",
        color: "#d46fbb",
    },
    enter: {
        position: "relative",
        top: -400,
        left: 100,
        height: 300,
        width: 500,
        background: "black",
        opacity: 0.8,
        cursor: "pointer",
        border: "1px solid #d46fbb",
        textAlign: "center",
        color: "#d46fbb",
    }
}
class ProjectCard extends Component {
    
    toggleEnter = () => {
        console.log("mouse inside div")
    }

    toggleLeave = () => {
        console.log("mouse outside div")
    }
    render() {
        return (
            <div style={styles.card} onMouseEnter={this.toggleEnter} onMouseLeave={this.toggleLeave}>
                <h1>Styls</h1>
                {/* <button><a href="https://github.com/pariscornett/Styls"  rel="noopener noreferrer" target="_blank">See the Code</a></button>
                <button><a>See it Live</a></button> */}
            </div>
        )
    }
}

export default ProjectCard
