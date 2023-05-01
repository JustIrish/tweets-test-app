import TweetsList from 'componenst/TweetsList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUsers } from 'services/userAPI';
import { smoothlyScroll } from 'services/smoothlyScroll';
import BackLink from 'componenst/BackLink';
import LoadMoreBtn from 'componenst/LoadMoreBtn';
import Loader from 'componenst/Loader';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    smoothlyScroll();
  }, [page]);

  const loadMoreHandler = () => setPage(prevPage => prevPage + 1);

  const visibleUsers = users.slice(0, page * 3);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TweetsList data={visibleUsers} />
          {page * 3 < users.length && <LoadMoreBtn onClick={loadMoreHandler} />}
        </>
      )}
    </>
  );
};

export default TweetsPage;
