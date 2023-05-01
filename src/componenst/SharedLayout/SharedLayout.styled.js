import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }

  @media screen and (min-width: 790px) {
    max-width: 790px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;
