import React from "react";

import './home.styles.scss'

import { Carousel } from "antd";

const HomePage = () => (
    <div>
        <Carousel autoplay>
            <div className='primeiro-slide'>
                <span className='tagline'>MAIS DE 10 ANOS DE EXPERIÊNCIA</span>
                <button>Conheça a W.A.</button>
            </div>
            <div className='segundo-slide'>
                <span>Conheça a nossa linha de produtos</span>
                <button className='custom-button'>Saiba mais</button>
            </div>
        </Carousel>
        <div style={{height: '10000px'}}>

        </div>
    </div>
);

export default HomePage;