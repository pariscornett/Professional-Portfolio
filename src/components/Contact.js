import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const styles = {
    layout: {
        position: "relative",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
    }
}

class Contact extends Component {
    render() {
        return (
              <div style={styles.layout}>
                <h3>Let's Connect</h3>
            </div>
     
        )
    }
}

export default Contact
