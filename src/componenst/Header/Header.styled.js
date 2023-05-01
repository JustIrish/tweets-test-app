import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  gap: 48px;
  align-items: center;
  width: 100%;
  padding: 16px 48px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  margin-left: 24px;
`;

export const StyledLink = styled(NavLink)`
  width: 100px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #5736a3;
  }

  :hover:not(&.active) {
    background-color: #ebd8ff33;
  }
`;
