import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 50px;
  margin-bottom: 40px;

  @media screen and (min-width: 790px) {
    gap: 20px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 60px;
  }
`;
