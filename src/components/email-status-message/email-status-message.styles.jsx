import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const messageStyle = css`
    margin: auto 0;
    padding-bottom: 5vh;
`;

const iconStyle = css`
    font-size: 3em;
    padding: 10px;
`;

export const SuccessIcon = styled(FontAwesomeIcon)`
    color: green;
    ${iconStyle}
`;

export const FailureIcon = styled(FontAwesomeIcon)`
    color: red;
    ${iconStyle}
`;

export const SuccessMessageContainer = styled.div`
    ${messageStyle}
`;

export const FailureMessageContainer = styled.div`
    ${messageStyle}
`;

export const StatusMessage = styled.span`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    letter-spacing: 1.5px;
`;