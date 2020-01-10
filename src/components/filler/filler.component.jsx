import React from "react";
import { uid } from "react-uid";

import FillerItemComponent from "../filler-item/filler-item.component";
import {FillerBackground, FillerContainer, FillerSeparator, FillerTitle} from "./filler.styles";

const FillerComponent = ({title, content, color}) => (
    <FillerBackground color={color}>
        <FillerTitle>{title}</FillerTitle>
        <FillerSeparator/>
        <FillerContainer>
        {
            content.map((item) => (
                <FillerItemComponent
                    key={uid(item)}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    paragraph={item.paragraph}/>
            ))
        }
        </FillerContainer>
    </FillerBackground>
);

export default FillerComponent;