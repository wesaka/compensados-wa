import React, { Component } from "react";
import {SliderNext, SliderPrev, StyledSlider} from "./slider.styles";

import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class SliderComponent extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true
        };



        return (
            <div>
                <SliderPrev onClick={() => this.slider.slickPrev()}><FontAwesomeIcon icon={faArrowAltCircleLeft}/></SliderPrev>
                <SliderNext onClick={() => this.slider.slickNext()}><FontAwesomeIcon icon={faArrowAltCircleRight}/></SliderNext>
                <StyledSlider ref={c => (this.slider = c)} {...settings}>
                    {this.props.children}
                </StyledSlider>
            </div>
        )
    }
};