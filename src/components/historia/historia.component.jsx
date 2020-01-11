import React from "react";
import {
    HistoriaContainer,
    HistoriaDivider, HistoriaParagraph,
    HistoriaTextContainer,
    HistoriaTitle,
    HistoriaTitleContainer,
    Logo
} from "./historia.styles";

const HistoriaComponent = () => (
    <HistoriaContainer>
        <Logo src='/images/logo-grande.png'/>
        <HistoriaTextContainer>
            <HistoriaTitleContainer>
                <HistoriaTitle>Nossa história</HistoriaTitle>
                <HistoriaDivider/>
            </HistoriaTitleContainer>
            <HistoriaParagraph>
                A Empresa Compensados e Laminados W.A. Ltda., atua no mercado madeireiro desde o ano de 2005, visando apresentar produtos com qualidade diversificada, tendo como principal objetivo oferecer materiais de baixo custo, com maior durabilidade e sustentabilidade.
                <br/>
                <br/>
                Visamos ser referência em qualidade, consolidando-se com base no respeito e organização empresarial ética, garantindo espaço no segmento que atuamos. Objetivamos manter com o cliente sempre nossa seriedade, respeito e transparência. Trabalhamos para sermos referência na indústria madeireira, superando obstáculos a fim de sempre inovar.
            </HistoriaParagraph>
        </HistoriaTextContainer>
    </HistoriaContainer>
);

export default HistoriaComponent;