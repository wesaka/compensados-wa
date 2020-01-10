// /images/page_bkgd8.jpg

import React from "react";
import {ButtonContainer, ButtonOrcamento, OrcamentoContainer, TitleOrcamento} from "./orcamento.styles";

const OrcamentoComponent = () => (
    <OrcamentoContainer>
        <TitleOrcamento>Solicite um orçamento agora mesmo!</TitleOrcamento>
        <ButtonContainer>
            <ButtonOrcamento to='/contato' >ENTRE EM CONTATO</ButtonOrcamento>
        </ButtonContainer>
    </OrcamentoContainer>
);

export default OrcamentoComponent;