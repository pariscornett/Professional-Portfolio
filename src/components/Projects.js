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
                <div>
                    <Card shadow={0} style={{width: '512px', margin: '2em', float: 'left'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>Styls</CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/pariscornett/Styls" target="_blank">Github</Button>
                            <Button colored href="https://styls.herokuapp.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                        </CardMenu>
                    </Card>  
                </div>
                  <div>
                  <Card shadow={0} style={{width: '512px', margin: '2em', float: 'left'}}>
                      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>Daria Memory Game</CardTitle>
                      <CardText>
                          {this.props.activeTab}
                      </CardText>
                      <CardActions border>
                          <Button colored href="https://github.com/pariscornett/Clicky-Game" target="_blank">Github</Button>
                          <Button colored href="https://pariscornett.github.io/Clicky-Game/" target="_blank">Live Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://pariscornett.github.io/Clicky-Game/" />
                      </CardMenu>
                  </Card>  
              </div>
              </div>
            )
        } else if(activeTab===1) {
            return(
                <div>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>That's Trashy</CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/pariscornett/Thats-Trashy">Github</Button>
                            <Button colored href="https://pariscornett.github.io/Thats-Trashy/">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://pariscornett.github.io/Thats-Trashy/" />
                        </CardMenu>
                    </Card>  
                </div>
            )
        } else if(activeTab===2) {
            return(
                <div>
                      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>Styls</CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/pariscornett/Styls" target="_blank">Github</Button>
                            <Button colored href="https://styls.herokuapp.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                        </CardMenu>
                    </Card>   
                </div>
            )
        } else if(activeTab===3) {
           return(
                <div>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>Hike It!</CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/pariscornett/Hike-It">Github</Button>
                            <Button colored href="https://shielded-springs-34062.herokuapp.com/">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://shielded-springs-34062.herokuapp.com/" />
                        </CardMenu>
                    </Card>  
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
                            <Tab>React</Tab>
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
