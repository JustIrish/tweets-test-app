import { StyledBtn } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledBtn type="button" onClick={onClick}>
      Load more
    </StyledBtn>
  );
};

export default LoadMoreBtn;
