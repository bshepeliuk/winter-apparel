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

          <div>
            <BuyButton type="button">buy</BuyButton>
          </div>
        </Wrapper>
      </div>
    </Header>
  );
}

export default HeaderView;
