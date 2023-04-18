import styled, { keyframes } from 'styled-components';

export const moveRight = keyframes`
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 486px;
  max-height: 710px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation-name: ${moveRight};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transform: translateX(500px);
`;
