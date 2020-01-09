import styled from "styled-components";

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-right: 20px;
`;

export const NavigationAccent = styled.div`
  height: 3px;
  width: 100%;
  background: #9fd150;
  opacity: 0;
  margin-top: 2px;
  z-index: 1;
  margin-bottom: 18px;
`;

export const NavigationButton = styled.div` 
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:hover ${NavigationAccent}{
    opacity: 1;
    transition: opacity 250ms;
  }
`;