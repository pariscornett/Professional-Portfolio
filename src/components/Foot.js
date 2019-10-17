import React from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

const styles = {
    design: {
        position: "fixed",
        width: "100%",
        top: "650px",
        background: "#7f7fd5",
        background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        padding: "5em" 
    }
}

function Foot() {
    return (
        <div>
        <Footer size="mini" style={styles.design}>
            <FooterSection type="middle" logo="Copyright &copy; 2019 | Paris Cornett">
            </FooterSection>
        </Footer>
        </div>
    )
}

export default Foot
