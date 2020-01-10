import React, { Component } from "react";
import {SliderNext, SliderNextButton, SliderPrev, SliderPrevButton, StyledSlider} from "./slider.styles";

import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true
        };



        return (
            <div>
                <SliderPrev onClick={() => this.slider.slickPrev()}><SliderPrevButton icon={faArrowAltCircleLeft}/></SliderPrev>
                <SliderNext onClick={() => this.slider.slickNext()}><SliderNextButton icon={faArrowAltCircleRight}/></SliderNext>
                <StyledSlider ref={c => (this.slider = c)} {...settings}>
                    {this.props.children}
                </StyledSlider>
            </div>
        )
    }
};