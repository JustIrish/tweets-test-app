import HomeImage from 'images/social-media.jpg';

const HomePage = () => {
  return (
    <div style={{ paddingTop: '30px', textAlign: 'center' }}>
      <h1 style={{ paddingBottom: '30px' }}>Welcome to our website!</h1>
      <img src={HomeImage} alt="Home page" loading="lazy" />
    </div>
  );
};

export default HomePage;
