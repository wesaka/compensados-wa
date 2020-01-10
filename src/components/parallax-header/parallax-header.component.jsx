import React from "react";
import {ParallaxBaseDiv, ParallaxTitle, ParallaxViewer} from "./parallax-header.styles";

const ParallaxHeaderComponent = ({background, title}) => (
    <div>
        <ParallaxBaseDiv background={background}>
            <ParallaxTitle>{title}</ParallaxTitle>
        </ParallaxBaseDiv>
        <ParallaxViewer>
        </ParallaxViewer>
    </div>

);

export default ParallaxHeaderComponent;