import TweetCard from 'componenst/TweetCard';
import { CardList } from './TweetsList.styled';

const TweetsList = ({ data }) => {
  return (
    <CardList>
      {data.map(({ id, avatar, tweets, followers }) => (
        <TweetCard
          key={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </CardList>
  );
};

export default TweetsList;
