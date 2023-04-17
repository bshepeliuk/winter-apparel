import styled, { css, keyframes } from 'styled-components';
import MaskUrl from '../../assets/create_mask.svg';

export const show = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Mask = styled.div`
  -webkit-mask-image: url(${MaskUrl});
  mask-image: url(${MaskUrl});
  -webkit-mask-repeat: no-repeat;
  width: 486px;
  height: 710px;
  background-position: center center;
  background-size: cover;
`;

export const BackgroundOfCreate = styled.div<{ url: string }>`
  background-image: ${(props) => css`url(${props.url})`};
  width: 100%;
  height: 100%;
  animation-name: move-right;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transform: translateX(100vh);
  transform-origin: center center;
  scale: 1;
  transition: scale 1s ease-out;
  background-position: center center;
  background-size: cover;

  &:hover {
    scale: 1.5;
  }
`;
