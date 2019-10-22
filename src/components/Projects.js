import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ProjectCard from "./ProjectCard";


const styles = {
    layout: {
        position: "relative",
        top:"100px",
        width: "100%"
    }
}

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            activeTab: 0,
            tabName: ""
        };
    }

    handleChange = (tabId) => {
        this.setState({
            activeTab: tabId,
            tabName: this.name,
        })
    }

    toggleCategories = () => {
        const {activeTab, tabName} = this.state;
        if(activeTab===0) {
            return(
                <div>
                    <ProjectCard 
                    activeTab={activeTab}
                    tabName={tabName}
                    />
                </div>
            )
        } else if(activeTab===1) {
            return(
                <div>
                    <ProjectCard 
                    activeTab={activeTab}
                    />
                </div>
            )
        } else if(activeTab===2) {
            return(
                <div>
                    <ProjectCard 
                    activeTab={activeTab}
                    />
                </div>
            )
        } else if(activeTab===3) {
           return(
                <div>
                    <ProjectCard
                    activeTab={activeTab} />
                </div>
           )
        }
    }


    render() {
        return (
            <div className="demo-tabs" style={styles.layout}>
                <Grid>
                    <Cell col={12}>
                        <Tabs activeTab={this.state.activeTab} onChange={this.handleChange} ripple>
                            <Tab name="React">React</Tab>
                            <Tab>JavaScript</Tab>
                            <Tab>MongoDB</Tab>
                            <Tab>MySQL</Tab>
                        </Tabs>
                        <section>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </section>
                    </Cell>
                </Grid>
          
        </div> 
        )
    }
}

export default Projects
