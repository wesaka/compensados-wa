import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
    position: relative;
    height: 68vh;
    width: 100vw;
    background-image: url(${({url}) => url});
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    padding-left: 14vw;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

export const Tagline = styled.h1`
    font-size: 22px;
    flex-grow: 1;
    margin: 10px 0;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.6) 1px 0 10px;
    text-align: left;
`;

export const CarouselButton = styled(Link)`
    flex-grow: 1;
    padding: 10px;
    color: white;
    background: ${({color}) => color};
    
    &:hover {
      background: white;
      color: black;
      cursor: pointer;
    }
`;

export const Spacer = styled.div`
    height: 50px;
    width: 100vw;
    opacity: 0;
`;