import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.div`
   width: 100vw;
   position: fixed;
   top: 0; 
   z-index: 1000;
   box-shadow: 0 0 1em rgba(0, 0, 0, .5);
   
   transform: translateY(${({topLen}) => `-${topLen}px`});
`;

export const GreenHeader = styled.div`
  background: #9fd150;
  vertical-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 36px;
`;

export const TextoContato = styled.span`
  flex-grow: 1;
  margin: 10px 0;
  color: white;
  font-size: 13px;
  transform: translateY(-25%);
`;

export const FacebookButton = styled(FontAwesomeIcon)`
  display: block;
  height: 24px;
  width: 24px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  color: white;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const NavigationHeader = styled.header`
    width: 100%;
    height: 130px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
`;

export const HeaderFilling = styled.div`
  height: 166px;
  z-index: -1;
`;

