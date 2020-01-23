import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import {SendingContainer} from "./sending.styles";

const SendingComponent = () => (
    <SendingContainer>
        <PulseLoader color={"white"} size={10}/>
        ENVIANDO MENSAGEM
    </SendingContainer>
);

export default SendingComponent;