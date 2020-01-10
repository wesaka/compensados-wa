import styled from "styled-components";

export const FillerBackground = styled.div`
    background: ${({color}) => color};
`;

export const FillerTitle = styled.h2`
    padding-top: 30px;
`;

export const FillerSeparator = styled.hr`
    width: 95%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(180,180,180,0.75), rgba(0, 0, 0, 0));
`;

export const FillerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;