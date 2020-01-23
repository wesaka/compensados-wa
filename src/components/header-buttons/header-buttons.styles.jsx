import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-bottom: auto;
`;

export const NavigationAccent = styled.div`
  height: 3px;
  width: 100%;
  background: #9fd150;
  opacity: 0;
  margin-top: 2px;
  z-index: 1;
  margin-bottom: 55px;
`;

export const NavigationButton = styled(Link)` 
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  letter-spacing: 1.2px;
  
  &:hover {
    cursor: pointer;
    color: inherit;
  }
  
  &:hover ${NavigationAccent}{
    opacity: 1;
    transition: opacity 250ms;
  }
`;