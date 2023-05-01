import styled from 'styled-components';

export const StyledBtn = styled.button`
  width: 180px;
  margin: auto;
  margin-bottom:60px;
  padding: 16px;
  border-radius: 10px;
  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  min-width: 196px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #471ca9;
  }
`;
