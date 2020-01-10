import React from "react";
import FillerItemComponent from "../filler-item/filler-item.component";
import {FillerBackground, FillerContainer, FillerSeparator, FillerTitle} from "./filler.styles";

const FillerComponent = ({title, content, color}) => (
    <FillerBackground color={color}>
        <FillerTitle>{title}</FillerTitle>
        <FillerSeparator/>
        <FillerContainer>
        {
            content.map(({imgUrl, title, paragraph}) => (
                <FillerItemComponent
                    imgUrl={imgUrl}
                    title={title}
                    paragraph={paragraph}/>
            ))
        }
        </FillerContainer>
    </FillerBackground>
);

export default FillerComponent;