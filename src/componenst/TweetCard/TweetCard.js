import {
  Card,
  LogoLink,
  BgImage,
  AvaWrap,
  StyledAvatar,
  DecorLine,
  TextWrapper,
  TweetsText,
  StyledBtn,
} from './TweetCard.styled';
import logo from 'images/logo-2x.png';

const TweetCard = ({ avatar, tweets, followers }) => {
  return (
    <Card>
      <BgImage></BgImage>
      <LogoLink href="https://goit.global/ua/">
        <img src={logo} alt="logo" width="76" height="22" />
      </LogoLink>
      <DecorLine></DecorLine>
      <AvaWrap>
        <StyledAvatar src={avatar} alt="User avatar" width="62" height="62" />
      </AvaWrap>
      <TextWrapper>
        <TweetsText>{tweets} tweets</TweetsText>
        <p>{followers} followers</p>
      </TextWrapper>
      <StyledBtn>follow</StyledBtn>
    </Card>
  );
};

export default TweetCard;
