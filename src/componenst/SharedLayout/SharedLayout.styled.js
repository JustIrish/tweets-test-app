import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 16px;

  /* @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
  } */
`;

export const Main = styled.main`
  flex: 1;
  margin: 0 auto;
`;
