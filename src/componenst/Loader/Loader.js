import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => (
  <SpinnerWrapper>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color=" #471ca9"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </SpinnerWrapper>
);

export default Loader;
