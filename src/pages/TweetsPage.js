import TweetsList from 'componenst/TweetsList';
import { useState, useEffect } from 'react';
import { getUsers } from 'services/userAPI';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <TweetsList data={users} />
    </>
  );
};

export default TweetsPage;
