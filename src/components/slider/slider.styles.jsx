import styled, { css } from "styled-components";
import Slider from 'react-slick';

const buttonStyle = css`
  font-size: 30px;
  color: rgba(51,51,51,0.5);
  padding: 10px;
  text-shadow: 5px 5px #000000;
  
  &:hover {
    cursor: pointer;
    color: rgba(167,167,167,0.5);
  }
`;

export const StyledSlider = styled(Slider) `
  position: relative;
`;

export const SliderNext = styled.div`
  position: absolute;
  top: 55%;
  right: 1%;
  z-index: 2;
  ${buttonStyle}
`;

export const SliderPrev = styled.div`
  position: absolute;
  top: 55%;
  left: 1%;
  z-index: 2;
  ${buttonStyle}
`;