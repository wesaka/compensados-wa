import styled, {keyframes} from "styled-components";

const animateMessage = keyframes`
  0% {
    transform: scaleX(0.666667);
  }
  
  100% {
    transform: scaleX(1);
  }
`;

export const SendingContainer = styled.div`
    width: 300px;
    height: 45px;
    background: #C5A27A;
    margin: 1em auto;
    border-radius: 2px;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    line-height: 45px;  
    font-weight: 600;
    letter-spacing: 0.07em;
    justify-content: space-evenly;
    animation: 2s ${animateMessage};
`;