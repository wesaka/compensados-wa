import { keyframes } from "styled-components";

export const slideUpFromBottomKeyframe = keyframes`
      from {
        transform: translateY(150%);
      }
      
      to {
        transform: translateY(0);
      }
`;
