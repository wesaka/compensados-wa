import React from "react";
import {Logo} from "./logo.styles";

const LogoComponent = ({history}) => (
        <Logo onClick={() => history.push('/')} src='images/logo-wa-final.png' alt='W.A. Logo'/>
);

export default LogoComponent;

