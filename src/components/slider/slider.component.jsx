import React, { Component } from "react";
import Slider from 'react-slick';

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
            autoplaySpeed: 5000,
            adaptiveHeight: true
        };

        return (
            <div>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
};