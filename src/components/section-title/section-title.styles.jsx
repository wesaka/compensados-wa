import styled from "styled-components";

export const SectionTitleContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 0 1em;
`;

export const SectionTitle = styled.h2`
    flex: initial;
    white-space: nowrap;
`;

export const SectionDivider = styled.hr`
    width: 100%;
    box-sizing: content-box;
    height: 6px;
    border: 1px solid #b3b3b3;
    border-right-width: 0;
    border-left-width: 0;
    margin-left: 1em;
    margin-top: auto;
    margin-bottom: auto;
`;