import { ChangeEvent, useState } from 'react';

import {
  BackgroundOfCreate,
  Input,
  Label,
  Mask,
  Wrapper,
} from './imageInput.styled';
import DefaultBackgroundUrl from '../../assets/create-background.jpg';

function ImageInput() {
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
        onChange={handleChange}
      />
      <Label htmlFor="image-input">
        <Mask>
          <BackgroundOfCreate url={url} />
        </Mask>
      </Label>
    </Wrapper>
  );
}

export default ImageInput;
