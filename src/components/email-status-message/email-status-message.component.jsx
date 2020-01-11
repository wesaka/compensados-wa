import React from "react";
import {
    FailureIcon,
    FailureMessageContainer,
    StatusMessage,
    SuccessIcon,
    SuccessMessageContainer
} from "./email-status-message.styles";

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

export const SuccessMessage = () => (
    <SuccessMessageContainer>
        <StatusMessage><SuccessIcon icon={faThumbsUp}/> Sua mensagem foi enviada com sucesso!</StatusMessage>
    </SuccessMessageContainer>
);

export const FailureMessage = () => (
    <FailureMessageContainer>
        <StatusMessage><FailureIcon icon={faThumbsDown}/> Ops! Algo de errado aconteceu.<br/>Atualize a página em seu navegador e tente novamente.</StatusMessage>
    </FailureMessageContainer>
);