import React from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

const styles = {
    design: {
        background: "#7f7fd5",
        background: "-webkit-linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        background: "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",
        textAlign: "center",
        padding: "5em" 
    }
}

function Foot() {
    return (
        <div>
        <Footer size="mini" style={styles.design}>
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        </div>
    )
}

export default Foot
