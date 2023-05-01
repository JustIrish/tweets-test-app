import { HiArrowLeft } from 'react-icons/hi';
import { BackLinkStyled } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <BackLinkStyled to={to}>
      <HiArrowLeft size="16" />
      {children}
    </BackLinkStyled>
  );
};

export default BackLink;
