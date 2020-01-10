import React from "react";
import {PictureItem, PicturesContainer} from "./pictures.styles";
import { picturesData } from "../../assets/empresaContent";

const PicturesComponent = () => (
    <PicturesContainer>
        {picturesData.map(picture => <PictureItem src={picture}/>)}
    </PicturesContainer>
);

export default PicturesComponent;