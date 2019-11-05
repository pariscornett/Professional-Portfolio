import React from 'react';
import { Header, Navigation } from "react-mdl"
import { Spring } from "react-spring/renderprops";

const styles={
    design: {
        //background: "#77A1D3",  /* fallback for old browsers */
        //background: "#7f7fd5",  /* fallback for old browsers */
        //background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        position: "fixed",
        top: 0,
        zIndex: "5"
    },
    drawerDesign: {
        background: "#ffffff",
        opacity: 0.8,
        color: "#8088d9",
        textAlign: "center",
        fontSize: "20px",
    }
}
function Nav() {
    return (
        <Spring
            from={{opacity: 0, marginTop:-500}}
            to={{opacity:1, marginTop:0}}
        >
            {props => (
                <div style={props}>
                    <div className="demo-big-content">
                        <div  style={styles.design}>
                            <Header title="Paris Cornett Development" style={styles.design} scroll> 
                                <Navigation>
                                    <a href="#">Contact</a>
                                    <a href="#">Resume</a>
                                    <a href="#">Skills</a>
                                    <a href="#">Projects</a>
                                </Navigation>
                            </Header>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
      
    )
}

export default Nav
