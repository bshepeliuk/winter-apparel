import styled, { keyframes } from 'styled-components';

export const LogoLink = styled.a`
  font-family: 'Jomhuria';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  color: #2e3341;
`;

export const Header = styled.header`
  margin: 45px 0 65px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  max-width: 600px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const ListItem = styled.li`
  & a {
    color: #000000;
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  & a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: red;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  & a::after {
    color: red;
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }

  & a:hover::after,
  & a:focus::after {
    transform: scale(1);
  }
`;

const pulse = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
	}
`;

export const BuyButton = styled.button`
  position: relative;
  width: 106px;
  height: 106px;
  background-color: #f54329;
  border-radius: 50%;
  border: none;
  font-size: 34px;
  transform: rotate(19.5deg);
  text-transform: uppercase;
  font-family: 'Oswald';
  font-weight: 700;
  line-height: 50px;
  color: #ffffff;
  transition: transform 0.5s ease-out;
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);

  &::after {
    content: '';
    position: absolute;
    translate: -50% -50%;
    width: 106px;
    height: 106px;
    border-radius: 50%;
    background-color: rgb(245, 67, 41, 0.1);
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    z-index: -1;
    rotate: 0;
    line-height: 50px;
    top: 50%;
    left: 50%;
    border: 1px solid rgb(245, 67, 41);
  }

  &:hover {
    transform: rotate(0);
  }
`;
