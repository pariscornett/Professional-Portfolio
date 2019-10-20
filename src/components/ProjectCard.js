import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton,  Grid, Cell } from "react-mdl";

class ProjectCard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                              {this.props.activeTab}
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>  
                    </Cell>
                </Grid>        
            </div>
        )
    }
}

export default ProjectCard
