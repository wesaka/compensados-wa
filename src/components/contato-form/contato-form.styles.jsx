import styled from "styled-components";

export const ContatoContainer = styled.div`
    flex: 1 1 50%;
`;

export const FormContato = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-top: 0.5em;
`;

export const InputSmall = styled.input`
    width: 30vw;
    min-width: 150px;
    height: 38px;
    flex: 1 1 20%;
    margin: 0.5em;
    padding: 0 1em;
`;

export const InputBig = styled.textarea`
    width: 100%;
    height: 150px;
    flex: 1 1 90%;
    margin: 0 0.5em;
    padding: 8px 1em;
`;

export const ButtonContato = styled.div`
    width: 200px;
    height: 45px;
    background: #9fd150;
    margin: 1em;
    border-radius: 2px;
    color: white;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    line-height: 45px;  
    font-weight: 600;
    letter-spacing: 0.07em;
    
    &:hover {
      background: #7aa747;
      cursor: pointer;
    }
`;