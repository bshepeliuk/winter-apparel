import styled, { keyframes } from 'styled-components';

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
