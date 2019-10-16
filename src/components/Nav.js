import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"


const styles={
    layout: {
        backgroundColor: "black",
        position: "relative",

        
    }
}
function Nav() {
    return (
        <div className="demo-big-content">
        <Layout >
            <Header title="Paris Cornett" style={styles.layout} scroll> 
            </Header>
            <Drawer title="Menu">
                <Navigation >
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
