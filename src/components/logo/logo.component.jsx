import React from "react";
import {Logo} from "./logo.styles";

const LogoComponent = ({history}) => (
        <Logo onClick={() => history.push('/')} src='images/logowa_colorida_sembg.png' alt='W.A. Logo'/>
);

export default LogoComponent;

