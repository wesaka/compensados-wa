import styled from "styled-components";
import { Link } from 'react-router-dom';
import { slideUpFromBottomKeyframe } from "../../utils/animations.utils";

export const OrcamentoContainer = styled.div`
    height: 30vh;
    width: 100%;
    background: url("/images/page_bkgd8.jpg");
    background-size: cover;
    padding: 30px 0;
`;

export const TitleOrcamento = styled.h1`
  padding-bottom: 40px;
  padding-top: 20px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
    animation-name: ${slideUpFromBottomKeyframe};
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-play-state: running;
`;

export const ButtonOrcamento = styled(Link)`
    background: none;
    color: black;
    border: 2px solid black;
    border-radius: 2px;
    padding: 15px;
    font-weight: 600;
    text-decoration: none;
    
    &:hover {
      color: black;
      background: rgba(255, 255, 255, 0.4);
    }
`;