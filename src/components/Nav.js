import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"


const styles={
    layout: {
        top: 0
    },
    design: {
        background: "#77A1D3",  /* fallback for old browsers */
        background: "#7f7fd5",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
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
        <div className="demo-big-content">
        <Layout  style={styles.layout}>
            <Header title="Paris Cornett Development" style={styles.design} scroll> 
            </Header>
            <Drawer>
                <Navigation >
                    <a style={styles.drawerDesign} href="/home">Home</a>
                    <a style={styles.drawerDesign} href="/about">About</a>
                    <a style={styles.drawerDesign} href="/contact">Contact</a>
                    <a style={styles.drawerDesign} href="/projects">Projects</a>
                    <a style={styles.drawerDesign} href="/resume">Resume</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
    )
}

export default Nav
