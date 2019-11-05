import React from 'react'
import { Grid, Cell } from "react-mdl";
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faNode, faHtml5, faCss3Alt, faGit, faNpm} from '@fortawesome/free-brands-svg-icons'

const styles = {
    layout: {
        position: "relative",
        top: -400,
        textAlign:"center",
        //background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        background: "#fff",
        opacity: "0.5",
        boxShadow: "10px 5px #d46fbb"
    },
    icons: {
        display: "inline",
        margin: "0 30 0 30",
        zIndex: "2"
    }
}
function Skills() {
    return (
        <Spring
        from={{opacity: 0}}
        to={{opacity:1}}
        config={{delay: 3000, duration: 1000}}
        >
            {props => (
                <div style={props}>
                    <Grid style={styles.layout}>
                        <Cell col={12}>
                            <div >
                                <FontAwesomeIcon icon={faHtml5} size="7x" style={styles.icons} />
                                <FontAwesomeIcon icon={faJsSquare} size="7x" style={styles.icons} />
                                <FontAwesomeIcon icon={faReact} size="7x"style={styles.icons} />
                                <FontAwesomeIcon icon={faNode} size="7x" style={styles.icons} />
                                <FontAwesomeIcon icon={faCss3Alt} size="7x" style={styles.icons} />
                                <FontAwesomeIcon icon={faGit} size="7x" style={styles.icons} />
                                <FontAwesomeIcon icon={faNpm} size="7x" style={styles.icons} />
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )}
        </Spring>
     
    )
}

export default Skills
