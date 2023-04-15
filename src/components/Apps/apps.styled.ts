import styled, { keyframes } from 'styled-components';

export const showApps = keyframes`
  0% {
    translate: -50vh -50vh;
    opacity: 0;
  }
  100% {
    translate: 0 0;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  margin-top: -20px;
  width: max-content;
  translate: -50vh -50vh;
  animation-name: ${showApps};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  opacity: 0;

  @media (max-width: 840px) {
    margin-bottom: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AppsButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: #2d3240;
  border: 1px solid #e1e3e9;
  border-radius: 50%;
  transition: all 0.3s ease-out;
`;

export const AppleButton = styled(AppsButton)`
  &:hover {
    margin-right: 17px;
  }
`;

export const AndroidButton = styled(AppsButton)`
  margin-left: -12px;

  &:hover {
    margin-left: 7px;
  }
`;
