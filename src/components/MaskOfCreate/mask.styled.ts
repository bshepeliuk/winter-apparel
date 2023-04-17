import styled, { keyframes } from 'styled-components';

const showCLetter = keyframes`
  0% {
    translate: -200px -200px;
    opacity: 0;
    scale: 0.5;
  }

  100% {
    translate: 0 0;
    opacity: 1;
    scale: 1;

  }
`;

const showRLetter = keyframes`
  0% {
    translate: 200px -200px;
    opacity: 0;
    scale: 0.5;
  }

  100% {
    translate: 0 0;
    opacity: 1;
    scale: 1;
  }
`;

const showELetter = keyframes`
  0% {
    opacity: 0;
    translate: -200px 0;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
`;

const showALetter = keyframes`
  0% {
    opacity: 0;
    translate: 200px 0;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }

`;
const showTLetter = keyframes`
  0% {
    opacity: 0;
    translate: -200px 200px;
    scale: 0.5;
  }

  100% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
`;
const showE2Letter = keyframes`
  0% {
    opacity: 0;
    translate: 200px 200px;
    scale: 0.5
  }

  100% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
`;

export const MaskSvg = styled.svg`
  & image {
    transition: transform 0.5s ease-in-out;
    transform-origin: center;
  }

  & image:hover {
    transform: scale(1.05);
  }

  & #c-letter {
    translate: -200px -200px;
    animation-name: ${showCLetter};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  & #r-letter {
    opacity: 0;
    translate: 200px -200px;
    animation-name: ${showRLetter};
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }

  & #e-letter {
    opacity: 0;
    translate: -200px 0;
    animation-name: ${showELetter};
    animation-duration: 1s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }

  & #a-letter {
    translate: 200px 0;
    opacity: 0;
    animation-name: ${showALetter};
    animation-duration: 1s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }

  & #t-letter {
    opacity: 0;
    translate: -200px 200px;
    animation-name: ${showTLetter};
    animation-duration: 1s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
  }

  & #e2-letter {
    opacity: 0;
    translate: 200px 200px;
    animation-name: ${showE2Letter};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;
