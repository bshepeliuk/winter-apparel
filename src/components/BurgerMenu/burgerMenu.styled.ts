import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  padding-top: 50px;
  flex-grow: 1;

  & a {
    color: #fff;
    font-size: 20px;
  }

  & a:hover {
    color: rgb(245, 67, 41);
  }
`;

export const OpenButton = styled.button`
  border: none;
  background-color: transparent;
  width: max-content;
`;

export const CloseButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 30px;
  width: max-content;

  &:hover {
    color: rgb(245, 67, 41);
  }
`;

export const BurgerSideBar = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 6;
  top: 0;
  right: 0;
  background-color: rgb(46, 51, 65);
  padding: 0px;
  transition: 0.5s;
  overflow-x: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => {
    return props.isOpen ? 'translateX(0)' : 'translateX(360px)';
  }};
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column;
  height: 100%;
`;
