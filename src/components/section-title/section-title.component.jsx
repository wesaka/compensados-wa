import React from "react";
import { SectionDivider, SectionTitle, SectionTitleContainer } from "./section-title.styles";

const SectionTitleComponent = ({title}) => (
    <SectionTitleContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDivider/>
    </SectionTitleContainer>
);

export default SectionTitleComponent;