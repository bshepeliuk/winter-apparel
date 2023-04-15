import { useState } from 'react';
import BurgerIcon from '../../assets/burger-icon.svg';
import { BuyButton } from '../Header/header.styled';
import {
  BurgerSideBar,
  CloseButton,
  Content,
  List,
  OpenButton,
} from './burgerMenu.styled';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <OpenButton type="button" onClick={onOpen}>
        <img src={BurgerIcon} />
      </OpenButton>

      <BurgerSideBar isOpen={isOpen}>
        <Content>
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>

          <List>
            <li>
              <a href="#">Clothes</a>
            </li>
            <li>
              <a href="#">Sneakers</a>
            </li>
            <li>
              <a href="#">Bags</a>
            </li>
            <li>
              <a href="#">Accessorize</a>
            </li>
          </List>

          <BuyButton>buy</BuyButton>
        </Content>
      </BurgerSideBar>
    </>
  );
}

export default BurgerMenu;
