import { HeaderWrapper, Nav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      {' '}
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
