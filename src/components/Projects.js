import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import { Spring } from 'react-spring/renderprops';


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
    cardTitleLong: {
        display: "inline",
        position: "relative",
        marginLeft: "7em",
        marginRight: "2em",
        fontWeight: "bold",
        fontFamily: 'Josefin Sans sans-serif',
    },
    cardTitleShort: {
        display: "inline",
        position: "relative",
        marginLeft: "10em",
        marginRight: "2em",
        fontWeight: "bold",
        fontFamily: 'Josefin Sans sans-serif',
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
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                   {props => (
                       <div style={props}>
                            <div style={{display: "flex"}}>   
                                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                    <CardTitle style={{color: 'black', textAlign:'center', height: '176px', background: 'url(https://images.unsplash.com/photo-1558361716-f8144bad90f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center / cover' }}></CardTitle>
                                    <CardText>
                                        {this.props.activeTab}
                                    </CardText>
                                    <CardActions border>
                                        <Button style={styles.btn} href="https://github.com/pariscornett/Styls"  rel="noopener noreferrer" target="_blank">Github</Button>
                                        <Button style={styles.btn} href="https://styls.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                                        <div style={styles.cardTitleShort}>STYLS</div>
                                    </CardActions>
                                    <CardMenu style={{color: '#d46fbb'}}>
                                        <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                                    </CardMenu>
                                </Card>  
                            </div>
                       </div>
                   )}
              </Spring>
            )
        } else if(activeTab===1) {
            return(
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
               {props => (
                   <div style={props}>
                        <div style={{display: "flex"}}>
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1508885368104-a4871600f1e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80) center / cover'}}></CardTitle>
                                <CardText>
                                    {this.props.activeTab}
                                </CardText>
                                <CardActions border>
                                    <Button style={styles.btn} href="https://github.com/pariscornett/Thats-Trashy" rel="noopener noreferrer" target="_blank">Github</Button>
                                    <Button style={styles.btn} href="https://pariscornett.github.io/Thats-Trashy/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                                    <div style={styles.cardTitleLong}>THAT'S TRASHY</div>
                                </CardActions>
                                <CardMenu style={{color: '#d46fbb'}}>
                                    <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://pariscornett.github.io/Thats-Trashy/" />
                                </CardMenu>
                            </Card>  
                        </div>
                   </div>
               )}
          </Spring>
               
            )
        } else if(activeTab===2) {
            return(
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
               {props => (
                   <div style={props}>
                        <div style={{display: "flex"}}>
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1558361716-f8144bad90f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center / cover'}}></CardTitle>
                                <CardText>
                                    {this.props.activeTab}
                                </CardText>
                                <CardActions border>
                                    <Button style={styles.btn} href="https://github.com/pariscornett/Styls" rel="noopener noreferrer" target="_blank">Github</Button>
                                    <Button style={styles.btn} href="https://styls.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                                    <div style={styles.cardTitleShort}>STYLS</div>
                                </CardActions>
                                <CardMenu style={{color: '#d46fbb'}}>
                                    <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://styls.herokuapp.com/" />
                                </CardMenu>
                            </Card>   
                        </div>
                   </div>
               )}
          </Spring>
          
            )
        } else if(activeTab===3) {
           return(
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
        >
            {props => (
                <div style={props}>
                    <div style={{display: "flex"}}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1465393884053-5b522c1d006b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80) center / cover'}}></CardTitle>
                            <CardText>
                                {this.props.activeTab}
                            </CardText>
                            <CardActions border>
                                <Button style={styles.btn} href="https://github.com/pariscornett/Hike-It" rel="noopener noreferrer" target="_blank">Github</Button>
                                <Button style={styles.btn} href="https://shielded-springs-34062.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                                <div style={styles.cardTitleShort}>HIKE IT!</div>
                            </CardActions>
                            <CardMenu style={{color: '#d46fbb'}}>
                                <IconButton name="share" href="mailto:?subject=I wanted you to see this up and coming developer's website&amp;body=Check out this site https://shielded-springs-34062.herokuapp.com/" />
                            </CardMenu>
                        </Card>  
                    </div>
                </div>
            )}
            </Spring>
           
           )
        }
    }


    render() {
        return (
            <Spring
                from={{opacity:0}}
                to={{opacity:1}}
                config={{delay:3000, duration:1000, }}
            >
                {props => (
                    <div style={props}>
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
                    </div>
                )}
            </Spring>
        
        )
    }
}

export default Projects
