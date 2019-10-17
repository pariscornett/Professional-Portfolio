import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

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
        this.state = { activeTab: 2 };
    }

    
    toggleCategories = () => {
        const {activeTab} = this.state;
        if(activeTab===0) {
            return(
                <div>
                    <h6>React projects</h6>
                </div>
            )
        } else if(activeTab===1) {
            return(
                <div>
                    <h6>Vanilla JavaScript projects</h6>
                </div>
            )
        } else if(activeTab===2) {
            return(
                <div>
                    <h6>MongoDB projects</h6>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="demo-tabs" style={styles.layout}>
                <Grid>
                    <Cell col={12}>
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>React</Tab>
                            <Tab>JavaScript</Tab>
                            <Tab>MongoDB</Tab>
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
