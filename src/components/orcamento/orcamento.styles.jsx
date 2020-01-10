import styled from "styled-components";
import { Link } from 'react-router-dom';

export const OrcamentoContainer = styled.div`
    height: 30vh;
    width: 100%;
    background: url("http://compensadoswa.com.br/wp-content/uploads/2014/06/page_bkgd8.jpg");
    background-size: cover;
    padding: 30px 0;
`;

export const TitleOrcamento = styled.h1`
  padding-bottom: 40px;
  padding-top: 20px;
  font-weight: 500;
`;

export const ButtonOrcamento = styled(Link)`
    background: none;
    color: black;
    border: 2px solid black;
    border-radius: 2px;
    padding: 15px;
    font-weight: 600;
    
    &:hover {
      color: black;
      background: rgba(255, 255, 255, 0.4);
    }
`;