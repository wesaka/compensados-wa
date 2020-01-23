import React from "react";
import {
    ProdutoCharacteristicsArrow,
    ProdutoCharacteristicsItem, ProdutoCharacteristicsText,
    ProdutoContainer, ProdutoDescription,
    ProdutoDescriptionContainer,
    ProdutoDivider,
    ProdutoImage, ProdutoSecondSection,
    ProdutoTitle
} from "./produto.styles";

import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import {uid} from "react-uid";
import TabelaComponent from "../tabela/tabela.component";

const ProdutoComponent = ({index, title, imgUrl, description, characteristics}) => (

    <ProdutoContainer>
        <ProdutoTitle>{title}</ProdutoTitle>
        <ProdutoDivider/>
        <ProdutoSecondSection>
        {
            (index % 2 === 0)
                ?
            <ProdutoImage src={imgUrl}/>
                :
            <ProdutoDescriptionContainer imgLeft={false}>
                <ProdutoDescription>{description}</ProdutoDescription>
                {characteristics.map((characteristic, index) => (
                    <ProdutoCharacteristicsItem key={uid(characteristic)}>
                        <ProdutoCharacteristicsArrow icon={faHandPointRight}/>
                        <ProdutoCharacteristicsText>{characteristic}</ProdutoCharacteristicsText>
                    </ProdutoCharacteristicsItem>
                ))}
            </ProdutoDescriptionContainer>
        }
        {
            (index % 2 === 0)
                ?
            <ProdutoDescriptionContainer imgLeft={true}>
                <ProdutoDescription>{description}</ProdutoDescription>
                {characteristics.map(characteristic => (
                    <ProdutoCharacteristicsItem key={uid(characteristic)}>
                        <ProdutoCharacteristicsArrow icon={faHandPointRight}/>
                        <ProdutoCharacteristicsText>{characteristic}</ProdutoCharacteristicsText>
                    </ProdutoCharacteristicsItem>
                ))}
            </ProdutoDescriptionContainer>
                :
            <ProdutoImage src={imgUrl}/>
        }
            {index === 0 ? <TabelaComponent/> : null}
        </ProdutoSecondSection>
    </ProdutoContainer>
);

export default ProdutoComponent;