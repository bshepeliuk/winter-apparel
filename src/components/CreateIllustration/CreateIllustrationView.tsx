import CreateIllustrationInput from '../CreateIllustrationInput/CreateIllustrationInput';
import CreateIllustrationURL from '../../assets/create-background-1.png';
import { Image, ImageWrapper } from './createIllustration.styled';

function CreateIllustrationView() {
  const isSupportMask =
    CSS.supports('-webkit-mask-image', `url(${CreateIllustrationURL})`) ||
    CSS.supports('mask-image', `url(${CreateIllustrationURL})`);

  return isSupportMask ? (
    <CreateIllustrationInput />
  ) : (
    <ImageWrapper>
      <Image src={CreateIllustrationURL} />
    </ImageWrapper>
  );
}

export default CreateIllustrationView;
