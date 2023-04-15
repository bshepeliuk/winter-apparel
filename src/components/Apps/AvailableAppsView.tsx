import AppleIcon from '../../assets/apple.png';
import AndroidIcon from '../../assets/android.png';
import {
  AndroidButton,
  AppleButton,
  ButtonWrapper,
  Wrapper,
} from './apps.styled';

function AvailableApps() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <AppleButton type="button">
          <img src={AppleIcon} />
        </AppleButton>
        <AndroidButton type="button">
          <img src={AndroidIcon} />
        </AndroidButton>
      </ButtonWrapper>
      <p>App available</p>
    </Wrapper>
  );
}

export default AvailableApps;
