import styled from "styled-components";

export const ParallaxBaseDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
    background: url(${({background}) => background}) no-repeat center;
`;

export const ParallaxTitle = styled.h1`
    position: fixed;
    top: 38%;
    left: 20vw;
    font-size: 60px;
    letter-spacing: .1em;
    font-weight: 400;
    color: white;
`;

export const ParallaxViewer = styled.div`
    position: relative;
    top: 0;
    background: transparent !important;
    width: 100%;
    height: 50vh;
    z-index: 5;
`;

export const TestDiv = styled.div`
position: relative;
height: 1000px;
background: red;
z-index: 1;
`;