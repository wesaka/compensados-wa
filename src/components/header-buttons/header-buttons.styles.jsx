import styled from "styled-components";

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-right: 20px;
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

export const NavigationButton = styled.div` 
  margin-left: 15px;
  margin-right: 15px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:hover ${NavigationAccent}{
    opacity: 1;
    transition: opacity 250ms;
  }
`;