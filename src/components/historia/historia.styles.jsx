import styled from "styled-components";

export const HistoriaContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: start;
    background: white;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Logo = styled.img`
    width: 228px;
    height: 182px;
    max-width: 800px;
    min-width: 228px;
    flex: 0 0 20%;
    padding-left: 2em;
    padding-top: 2em;
`;

export const HistoriaTextContainer = styled.div`
    min-width: 350px;
    padding: 2em;
    text-align: left;
    flex: 1 0 20%;
`;

export const HistoriaTitleContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;

export const HistoriaTitle = styled.h2`
    flex: initial;
    white-space: nowrap;
`;

export const HistoriaDivider = styled.hr`
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

export const HistoriaParagraph = styled.p`

`;
