import styled from 'styled-components';

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 840px) {
    flex-flow: column;
    align-items: center;
    gap: 50px;
  }
`;

export const DetailsWrapper = styled.div`
  background-color: #fff;
  padding: 41px 0 101px 0;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

export const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const RightSide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  align-self: end;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 85px;
  line-height: 100%;
  color: #000000;
  transform: translateX(-100vh);
  animation-name: move-left;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  & span {
    display: inline-block;
    transform: rotate(10.48deg);
    background-color: #bafd37;
    position: relative;
    line-height: 110%;
    left: 20px;
    top: 0px;
    padding: 0 10px;
    border-radius: 5px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  & span::after {
    content: '*';
    position: absolute;
    top: -23px;
    right: -22px;
  }

  @media (max-width: 840px) {
    line-height: 110%;
    text-align: center;
    font-size: 89px;
  }

  @media (max-width: 600px) {
    text-align: center;
    font-size: 65px;
  }

  @media (max-width: 530px) {
    text-align: center;
    font-size: 55px;
  }

  @media (max-width: 440px) {
    font-size: 45px;

    & span::after {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 117%;
  color: #000000;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const AboutTitle = styled(Title)`
  margin-top: 70px;
`;

export const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
  padding: 0 48px;
`;
