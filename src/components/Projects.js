import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";



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
        };
    }

    handleChange = (tabId) => {
        this.setState({
            activeTab: tabId
        })
    }

    toggleCategories = () => {
        const {activeTab} = this.state;
        if(activeTab===0) {
            return(
                <div>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>React</CardTitle>
                            <CardText>
                              {this.props.activeTab}
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>  
                </div>
            )
        } else if(activeTab===1) {
            return(
                <div>
                   <h1>JavaScript</h1>
                </div>
            )
        } else if(activeTab===2) {
            return(
                <div>
                   <h1>MongoDB</h1>
                </div>
            )
        } else if(activeTab===3) {
           return(
                <div>
                  <h1>MySQL</h1>
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
