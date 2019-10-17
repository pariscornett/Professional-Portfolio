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
    }
}
function Nav() {
    return (
        <div className="demo-big-content">
        <Layout  style={styles.layout}>
            <Header title="Paris Cornett Development" style={styles.design} scroll> 
            </Header>
            <Drawer title="Menu" style={styles.design}>
                <Navigation>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/projects">Projects</a>
                    <a href="/resume">Resume</a>
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
