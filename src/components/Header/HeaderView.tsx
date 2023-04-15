import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {
  BurgerWrapper,
  BuyBtnWrapper,
  BuyButton,
  Header,
  ListItem,
  LogoLink,
  Navigation,
  NavList,
  Wrapper,
} from './header.styled';

function HeaderView() {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <LogoLink href="#">LANDING</LogoLink>

          <BurgerWrapper>
            <BurgerMenu />
          </BurgerWrapper>

          <Navigation>
            <NavList>
              <ListItem>
                <a href="#">Clothes</a>
              </ListItem>
              <ListItem>
                <a href="#">Sneakers</a>
              </ListItem>
              <ListItem>
                <a href="#">Bags</a>
              </ListItem>
              <ListItem>
                <a href="#">Accessorize</a>
              </ListItem>
            </NavList>
          </Navigation>

          <BuyBtnWrapper>
            <BuyButton type="button">buy</BuyButton>
          </BuyBtnWrapper>
        </Wrapper>
      </div>
    </Header>
  );
}

export default HeaderView;
