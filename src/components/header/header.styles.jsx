import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GreenHeader = styled.div`
  background: #9fd150;
  vertical-align: center;
  display: flex;
  flex-direction: row;
`;

export const TextoContato = styled.span`
  flex-grow: 2;
  margin: 10px 0;
  color: white;
`;

export const FacebookButton = styled(FontAwesomeIcon)`
  height: 24px;
  width: 24px;
  flex-grow: 1;
  margin: auto 0;
  color: white;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const NavigationHeader = styled.header`
    width: 100%;
    background-color: #eee;
    vertical-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    
    ${({topLen}) => topLen && `
        position: fixed;
        top: 0;
        background-color: white;
        box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
        z-index: 1000;
    `}
`;

