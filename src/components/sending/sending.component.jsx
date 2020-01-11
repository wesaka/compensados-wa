import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import {SendingContainer} from "./sending.styles";
import { css } from "@emotion/core"


const SendingComponent = () => (
    <SendingContainer>
        <PulseLoader color={"white"} size={10}/>
        ENVIANDO MENSAGEM
    </SendingContainer>
);

export default SendingComponent;