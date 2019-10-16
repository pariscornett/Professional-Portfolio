import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"


const styles={
    layout: {
        top:0
    }
}
function Nav() {
    return (
        <div className="demo-big-content">
        <Layout  style={styles.layout}>
            <Header title="Paris Cornett" scroll> 
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
