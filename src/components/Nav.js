import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import { Spring } from "react-spring/renderprops";

const styles={
    layout: {
        top: 0
    },
    design: {
        //background: "#77A1D3",  /* fallback for old browsers */
        //background: "#7f7fd5",  /* fallback for old browsers */
        //background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
    },
    drawerDesign: {
        background: "#ffffff",
        opacity: 0.8,
        color: "#8088d9",
        textAlign: "center",
        fontSize: "20px"
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
                        <Layout  style={styles.layout}>
                            <Header title="Paris Cornett Development" style={styles.design} scroll> 
                            </Header>
                            <Drawer>
                                <Navigation >
                                    <a style={styles.drawerDesign} href="/home">Home</a>
                                    <a style={styles.drawerDesign} href="/contact">Contact</a>
                                    <a style={styles.drawerDesign} href="https://docs.google.com/document/d/1Anz4AYTMIudpU6FfYRQ5N0gsxJqNoCBnEPGCSpcP8Js/edit?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
                                </Navigation>
                            </Drawer>
                            <Content>
                                <div className="page-content" />
                            </Content>
                        </Layout>
                    </div>
                </div>
            )}
        </Spring>
      
    )
}

export default Nav
