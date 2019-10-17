import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../assets/myAvatar.png";


const styles={
    layout: {
        top: 0,
    },
    design: {
        background: "#7f7fd5",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        textAlign: "center"    
    },
    avatar: {
        height: 250,
        position:"relative",
        paddingTop: "5em",
        borderRadius: 200
    },
    banner: {
        backgroundColor: "#ffffff",
        opacity: "0.8",
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
       
    },
    socialIcons: {
        color: "black"
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

                        <div style={styles.banner}>
                            <h1>Full Stack Developer</h1>

                            <hr />

                            <h4>MongoDB | Express | React | NodeJS | Python | HTML | CSS | Bootstrap | Materialize | npm </h4>

                            <div style={styles.social}>
                            <a 
                            href="https://github.com/pariscornett" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.socialIcons}
                            >
                                <i className="fa fa-github"></i>
                            </a>
                            <a 
                            href="https://github.com/pariscornett" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.socialIcons}
                            >
                                <i className="fa fa-linkedin" aria-hidden="true" /> 
                            </a>
                        </div>
                        </div>

                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home
