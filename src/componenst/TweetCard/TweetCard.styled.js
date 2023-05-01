import styled from 'styled-components';
import cardBg from 'images/card-bg-2x.png';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* max-width: 100%; */
  width: 380px;
  padding: 28px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media screen and (min-width: 790px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 96px) / 3);
  }
`;

export const LogoLink = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BgImage = styled.div`
  width: 100%;
  height: 168px;
  background-image: url(${cardBg});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const AvaWrap = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-width: 8px;
  background-color: ${({ theme: { colors } }) => colors.elementColor};
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
`;

export const DecorLine = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  left: 0px;
  top: 45%;
  background: ${({ theme: { colors } }) => colors.elementColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const TextWrapper = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: ${({ theme: { colors } }) => colors.mainTextColor};

  margin-top: 88px;
  margin-bottom: 26px;
`;

export const TweetsText = styled.p`
  margin-bottom: 16px;
`;
