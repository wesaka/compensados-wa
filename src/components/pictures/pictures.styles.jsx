import styled from "styled-components";

export const PicturesContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    background: white;
`;

export const PictureItem = styled.img`
    margin: 1.5em;
    width: 20vw;
    max-width: 700px;
    min-width: 200px;
    flex: 1 1 20%;
    
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
`;