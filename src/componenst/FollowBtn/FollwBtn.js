import { StyledBtn } from './FollowBtn.styled';

const FollowBtn = ({ isFollowing, onFollowClick }) => {
  return (
    <StyledBtn type="button" onClick={onFollowClick} isFollowing={isFollowing}>
      {isFollowing ? 'Following' : 'Follow'}
    </StyledBtn>
  );
};
export default FollowBtn;
