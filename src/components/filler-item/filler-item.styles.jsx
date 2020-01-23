import styled from "styled-components";

// Lembre que o flex tem de ficar dentro do child component
// Nesse caso estamos definindo flex-basis como sendo 33% então no maximo cada elemento preenche 33% da pagina
// Assim não sobra espaço pra um quarto elemento na página
export const FillerItemsContainer = styled.div`
    text-align: left;
    padding: 20px;
    flex: 1 1 28%;
    width: 20%;
    min-width: 200px;
`;

export const FillerItemImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const FillerItemTitle = styled.h3`
    margin: 10px 0;
`;