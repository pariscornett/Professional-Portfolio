import React from "react";
import { Footer, FooterSection } from "react-mdl";

const styles = {
    design: {
        //background: "#7f7fd5",
        //background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        background: "none",
        padding: "5em",
        position: "relative",
        left: 550,
        fontFamily: 'Montserrat sans-serif',
    }
}

function Foot() {
    return (
        <div>
        <Footer size="mini" style={styles.design}>
            <FooterSection logo="Copyright &copy; 2019 | Paris Cornett">
            </FooterSection>
        </Footer>
        </div>
    )
}

export default Foot
