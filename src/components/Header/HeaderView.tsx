import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {
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

          <div className="burger-menu">
            <BurgerMenu />
          </div>

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

          <div className="buy-wrapper">
            <BuyButton type="button">buy</BuyButton>
          </div>
        </Wrapper>
      </div>
    </Header>
  );
}

export default HeaderView;
