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

const ProdutoComponent = ({title, imgUrl, imgLeft, description, characteristics}) => (
    <ProdutoContainer>
        <ProdutoTitle>{title}</ProdutoTitle>
        <ProdutoDivider/>
        <ProdutoSecondSection>
        {
            imgLeft
                ?
            <ProdutoImage src={imgUrl}/>
                :
            <ProdutoDescriptionContainer imgLeft={imgLeft}>
                <ProdutoDescription>{description}</ProdutoDescription>
                {characteristics.map(characteristic => (
                    <ProdutoCharacteristicsItem key={uid(characteristic)}>
                        <ProdutoCharacteristicsArrow icon={faHandPointRight}/>
                        <ProdutoCharacteristicsText>{characteristic}</ProdutoCharacteristicsText>
                    </ProdutoCharacteristicsItem>
                ))}
            </ProdutoDescriptionContainer>
        }
        {
            imgLeft
                ?
            <ProdutoDescriptionContainer imgLeft={imgLeft}>
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
        </ProdutoSecondSection>
    </ProdutoContainer>
);

export default ProdutoComponent;