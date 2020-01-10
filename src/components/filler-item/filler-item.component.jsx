import React from "react";
import {FillerItemImage, FillerItemsContainer, FillerItemTitle} from "./filler-item.styles";

const FillerItemComponent = ({imgUrl, title, paragraph}) => (
    <FillerItemsContainer>
        <FillerItemImage src={imgUrl} alt={title}/>
        <FillerItemTitle>{title}</FillerItemTitle>
        {paragraph ? <p>{paragraph}</p> : null}
    </FillerItemsContainer>
);

export default FillerItemComponent;