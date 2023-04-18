import { ChangeEvent, useState } from 'react';

import { Input, Label, Wrapper } from './createIllustrationInput.styled';
import DefaultBackgroundUrl from '../../assets/create-background.jpg';
import MaskOfCreateView from '../MaskOfCreate/MaskOfCreateView';

function CreateIllustrationInput() {
  const [url, setUrl] = useState(DefaultBackgroundUrl);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;

    if (files === null) return;

    const fileUrl = URL.createObjectURL(files[0]);

    setUrl(fileUrl);
  };

  return (
    <Wrapper>
      <Input
        type="file"
        name="image-input"
        id="image-input"
        accept=".jpg, .jpeg, .png, .svg"
        onChange={handleChange}
      />
      <Label htmlFor="image-input">
        <MaskOfCreateView backgroundUrl={url} />
      </Label>
    </Wrapper>
  );
}

export default CreateIllustrationInput;
