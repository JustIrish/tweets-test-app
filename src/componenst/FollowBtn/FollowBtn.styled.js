import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  padding: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.btnTextColor};
  text-transform: uppercase;
  border-color: transparent;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: box-shadow 300ms linear;
  cursor: pointer;

  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};

  &:hover,
  &:focus {
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
  }
`;
