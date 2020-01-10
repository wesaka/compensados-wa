// http://compensadoswa.com.br/wp-content/uploads/2014/06/page_bkgd8.jpg

import React from "react";
import {ButtonOrcamento, OrcamentoContainer, TitleOrcamento} from "./orcamento.styles";

const OrcamentoComponent = () => (
    <OrcamentoContainer>
        <TitleOrcamento>Solicite um orçamento agora mesmo!</TitleOrcamento>
        <ButtonOrcamento to='/contato' >ENTRE EM CONTATO</ButtonOrcamento>
    </OrcamentoContainer>
);

export default OrcamentoComponent;