import React from 'react'
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const styles={
    position: "fixed",
    top: 600,
    border: "5px solid black",
    borderRadius: "50%", 
    cursor: "pointer",
    padding: 5,
    opacity: 0.6,
    width: "50px",
    height: "50px"
}

function ScrollToTop() {

    return (
        <div>
            <Grid>
                <Cell col={1} offset={11}>
                    <FontAwesomeIcon icon={faChevronUp} size="2x" style={styles} id="scrollToTop" onClick={window.scrollTo({top: 0, left: 0, behavior:"smooth"})} />
                </Cell>
            </Grid>
            
        </div>
    )
}

export default ScrollToTop
