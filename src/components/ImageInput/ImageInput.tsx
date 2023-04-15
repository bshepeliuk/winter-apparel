import { ChangeEvent, useEffect, useState } from 'react';

import CreateMaskUrl from '../../assets/create_mask.svg';
import DefaultCreateImgUrl from '../../assets/create-background.jpg';
import { useWindowResize } from '../../hooks/useWindowResize';
import { Input, Label, Wrapper } from './imageInput.styled';
import { CSSProperties } from 'styled-components';

function ImageInput() {
  const [styles, setStyles] = useState(createLabelStyles);
  const [width] = useWindowResize();

  useEffect(() => {
    if (width > 0 && width <= 530) {
      setStyles((prev) => ({ ...prev, width: '100%' }));
    }

    if (width > 0 && width > 530) {
      setStyles(createLabelStyles());
    }
  }, [width]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;

    if (files === null) return;

    const fileUrl = URL.createObjectURL(files[0]);

    setStyles(createLabelStyles(fileUrl));
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
        <div style={styles}></div>
      </Label>
    </Wrapper>
  );
}

function createLabelStyles(backgroundUrl = DefaultCreateImgUrl): CSSProperties {
  return {
    backgroundImage: `url(${backgroundUrl})`,
    width: 486,
    height: 710,
    WebkitMaskImage: `url(${CreateMaskUrl})`,
    WebkitMaskRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    animationName: 'move-right',
    animationDuration: '2s',
    backgroundSize: 'cover',
    animationFillMode: 'forwards',
    transform: 'translateX(100vh)',
  };
}

export default ImageInput;
