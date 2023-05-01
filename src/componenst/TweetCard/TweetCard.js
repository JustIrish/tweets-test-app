import { useEffect, useState } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'services/localStorage';

import {
  Card,
  LogoLink,
  BgImage,
  AvaWrap,
  StyledAvatar,
  DecorLine,
  TextWrapper,
  TweetsText,
} from './TweetCard.styled';
import logo from 'images/logo-2x.png';
import FollowBtn from 'componenst/FollowBtn';

const TweetCard = ({ id, avatar, tweets, followers }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [add, setAdd] = useState(0);

  useEffect(() => {
    isFollowing ? setAdd(1) : setAdd(0);
  }, [isFollowing]);

  useEffect(() => {
    const following = loadFromLocalStorage(`isFollowing${id}`);
    setIsFollowing(following);
  }, [id]);

  const onFollowClick = () => {
    saveToLocalStorage(`isFollowing${id}`, !isFollowing);
    setIsFollowing(state => !state);
  };

  return (
    <Card>
      <BgImage></BgImage>
      <LogoLink href="https://goit.global/ua/">
        <img src={logo} alt="logo" width="76" height="22" loading="lazy" />
      </LogoLink>
      <DecorLine></DecorLine>
      <AvaWrap>
        <StyledAvatar src={avatar} alt="User avatar" width="62" height="62" />
      </AvaWrap>
      <TextWrapper>
        <TweetsText>{tweets} tweets</TweetsText>
        <p>{(followers + add).toLocaleString('en-US')} followers</p>
      </TextWrapper>
      <FollowBtn onFollowClick={onFollowClick} isFollowing={isFollowing} />
    </Card>
  );
};

export default TweetCard;
