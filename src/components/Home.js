import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../assets/myAvatar.png";
import About from "./About";

const styles={
    layout: {
        top: 0
    },
    design: {
        //background: "#7f7fd5",  /* fallback for old browsers */
        //background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: "500px",
        textAlign: "center"    
    },
    avatar: {
        height: 250,
        position:"relative",
        paddingTop: "5em",
        borderRadius: 200
    },
    banner: {
        position:"relative",
        top: "100px",
        color: "#ffffff",
        width: "75%",
        margin: "auto",
        borderRadius: 15,
        textAlign: "center"
    },
    social: {
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        margin: "auto",
        fontSize: "5em",
       
    }
}


class Home extends Component {
    render() {
        return (
            <div >
                <Grid style={styles.design}>
                    <Cell col={12} style={styles.layout}>
                        <img 
                        src= {avatar}
                        alt="avatar"
                        style={styles.avatar}
                        />

                        <h3 style={styles.banner}>I'm Paris, a problem-solver and programmer.</h3>
                    </Cell>
                    <About />
                </Grid>
            </div>
        )
    }
}

export default Home
