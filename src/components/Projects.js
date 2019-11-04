import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";



const styles = {
    layout: {
        position: "relative",
        top: "-400px",
        width: "100%",
        height: "600px",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
    },
    btn: {
        color: "#d46fbb"
    },
    cardTitle: {
        display: "inline",
        position: "relative",
        marginLeft: "10em",
        fontWeight: "semi-bold"
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
                <div style={{display: "flex"}}>
         
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', textAlign:'center', height: '176px', background: 'url(https://images.unsplash.com/photo-1558361716-f8144bad90f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center / cover' }}></CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button style={styles.btn} href="https://github.com/pariscornett/Styls"  rel="noopener noreferrer" target="_blank">Github</Button>
                            <Button style={styles.btn} href="https://styls.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                            <div style={styles.cardTitle}>STYLS</div>
                        </CardActions>
                        <CardMenu style={{color: '#d46fbb'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                        </CardMenu>
                    </Card>  
              </div>
            )
        } else if(activeTab===1) {
            return(
                <div style={{display: "flex"}}>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1508885368104-a4871600f1e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80) center / cover'}}></CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button style={styles.btn} href="https://github.com/pariscornett/Thats-Trashy" rel="noopener noreferrer" target="_blank">Github</Button>
                            <Button style={styles.btn} href="https://pariscornett.github.io/Thats-Trashy/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                            <div style={styles.cardTitle}>THAT'S TRASHY</div>
                        </CardActions>
                        <CardMenu style={{color: '#d46fbb'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://pariscornett.github.io/Thats-Trashy/" />
                        </CardMenu>
                    </Card>  
                </div>
            )
        } else if(activeTab===2) {
            return(
                <div style={{display: "flex"}}>
                      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1558361716-f8144bad90f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center / cover'}}></CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button style={styles.btn} href="https://github.com/pariscornett/Styls" rel="noopener noreferrer" target="_blank">Github</Button>
                            <Button style={styles.btn} href="https://styls.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                            <div style={styles.cardTitle}>STYLS</div>
                        </CardActions>
                        <CardMenu style={{color: '#d46fbb'}}>
                            <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                        </CardMenu>
                    </Card>   
                </div>
            )
        } else if(activeTab===3) {
           return(
                <div style={{display: "flex"}}>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1465393884053-5b522c1d006b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80) center / cover'}}></CardTitle>
                        <CardText>
                            {this.props.activeTab}
                        </CardText>
                        <CardActions border>
                            <Button style={styles.btn} href="https://github.com/pariscornett/Hike-It" rel="noopener noreferrer" target="_blank">Github</Button>
                            <Button style={styles.btn} href="https://shielded-springs-34062.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                            <div style={styles.cardTitle}>HIKE IT!</div>
                        </CardActions>
                        <CardMenu style={{color: '#d46fbb'}}>
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
                    <Cell col={6} offset={3}>
                        <Tabs activeTab={this.state.activeTab} onChange={this.handleChange} ripple>
                            <Tab style={{color:"#fff"}}>React</Tab>
                            <Tab style={{color:"#fff"}}>JavaScript</Tab>
                            <Tab style={{color:"#fff"}}>MongoDB</Tab>
                            <Tab style={{color:"#fff"}}>MySQL</Tab>
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
